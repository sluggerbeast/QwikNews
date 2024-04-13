import React, { useEffect, useState } from "react";

function PwaInstall() {
  const [supportPWA, setSupportPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  const onInstallClick = () => {
    if (!supportPWA) {
      alert(
        "Either you have already installed the app or your browser does not support PWA :("
      );
      return;
    }
    promptInstall.prompt();
  };

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setSupportPWA(true);
      setPromptInstall(e);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  });

  if (window.matchMedia("(display-mode: standalone)").matches) {
    return;
  } else {
    return (
      <button
        id="installInstructions"
        onClick={onInstallClick}
        className="bg-[#f4f4f4] mt-1 sm:hidden border ml-[50%] translate-x-[-50%] border-red-400 rounded p-1 w-full h-fit flex flex-row justify-center gap-2 "
      >
        <h3>
          <span className="italic font-bold">Install QwikNews</span>
        </h3>
        <img
          width="20px"
          src="https://toppng.com/uploads/preview/oogle-play-store-logo-png-transparent-google-play-store-logo-11562869574fcnucksipp.png"
          alt=""
        />
      </button>
    );
  }
}

export default PwaInstall;
