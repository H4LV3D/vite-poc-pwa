import React from "react";

import { TbShare2 } from "react-icons/tb";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { ImArrowDown } from "react-icons/im";

interface Props {
  closePrompt: () => void;
  doNotShowAgain: () => void;
}

export default function AddToIosSafari(props: Props) {
  const { closePrompt, doNotShowAgain } = props;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[50%] z-50 pb-12 px-4 text-white">
      <div className="relative bg-black p-6 h-full rounded-xl space-y-3 ">
        <div className="flex justify-end ">
          <button className=" p-3" onClick={closePrompt}>
            <FaTimes className="text-xl" />
          </button>
        </div>
        <p className="text-base">
          For the best experience, we recommend installing the distributor's app
          to your home screen!
        </p>
        <div className="flex gap-2 items-center text-base pt-4 ">
          <p>Click the</p>
          <TbShare2 className="text-2xl" />
          <p>icon</p>
        </div>
        <div className="flex flex-col gap-2 text-base w-full pt-4 ">
          <p>Scroll down and then click:</p>
          <div className="bg-zinc-800 flex justify-between items-center w-full px-4 py-2 rounded-lg">
            <p className="text-base ">Add to Home Screen</p>
            <AiOutlinePlusSquare className="text-2xl" />
          </div>
        </div>
        <div className="flex justify-end pt-4 ">
          <button
            className="px-2.5 py-1.5 font-[600] text-sm rounded-md "
            onClick={doNotShowAgain}
          >
            Don&apos;t show again
          </button>
        </div>
        <div className="absolute -bottom-[50px] w-full flex justify-center mr-8 ">
          <ImArrowDown className="text-4xl text-indigo-700 -z-10 mr-10 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
