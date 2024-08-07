import React from "react";
import usePopUpPWA from "./utils/others/pwaPopUp";

type Props = {};

const App = (props: Props) => {
  const { handleInstallClick, installable } = usePopUpPWA();

  return (
    <div className=" bg-white min-h-[100vh] w-full flex items-center justify-center ">
      <div className="p-8 border rounded-xl max-w-lg min-h-[200px] space-y-3  ">
        <h1 className=" text-3xl font-[700] ">Kollectkollect Test POC</h1>
        <p className="text-[.9rem] ">
          This is a test POC for Vite and Vite-plugin-pwa, it is a simple app
          that displays a message on the screen and has a service worker to
          cache the assets.
        </p>
        <div className="flex items-center space-x-2 ">
          {installable && (
            <button
              onClick={handleInstallClick}
              className="bg-black text-white font-[500] min-w-[6rem] px-6 h-12 rounded-[6px]  "
            >
              Install
            </button>
          )}
          <button className="bg-neutral-50 text-neutral-500 font-[500] min-w-[6rem] px-6 h-12 rounded-[6px]  ">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
