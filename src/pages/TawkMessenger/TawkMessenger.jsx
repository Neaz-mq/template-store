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

        // ✅ Instead of hiding the widget completely, minimize it
        window.Tawk_API.minimize(); 
      };
    };
  }, []);

  return null; // No extra UI, just the Tawk.to widget
};

export default TawkMessenger;
