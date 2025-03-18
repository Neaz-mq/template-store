import { useEffect } from "react";

const TawkMessenger = () => {
  useEffect(() => {
    loadTawkScript();
  }, []);

  const loadTawkScript = () => {
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
        window.Tawk_API.showWidget();
      };

      window.Tawk_API.onStatusChange = function (status) {
        if (status === "online") {
          console.log("Tawk.to is Online");
          window.Tawk_API.showWidget();
        }
      };
    };
  };

  return (
    <div>
     
    </div>
  );
};

export default TawkMessenger;
