import { useEffect } from "react";

const TawkMessenger = () => {
  useEffect(() => {
    if (window.Tawk_API) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/67c53eb9333cf7190a569b15/1ild7q17l";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.head.appendChild(script);

    script.onload = () => {
      console.log("Tawk.to Loaded");

      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_API.onLoad = function () {
        console.log("Tawk.to Chat Widget Loaded");

        // ✅ Ensure chat is minimized and doesn't auto-open
        setTimeout(() => {
          window.Tawk_API.minimize();
        }, 1000);
      };
    };
  }, []);

  return null; // Keeps the icon visible without forcing an extra button
};

export default TawkMessenger;
