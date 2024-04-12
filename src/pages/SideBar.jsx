import React, { useState } from "react";

function SideBar() {
  return (
    <>
      <div className="flex flex-col z-30 fixed  sm:justify-center h-[100vh] w-full sm:w-[400px] bg-slate-400  mb-1 overflow-hidden font-roboto">
        <div className="max-h-[50vh] h-fit flex-auto">
          <img className="w-fit" />
        </div>
        <div className="m-4 flex-[70%]">
          <h2 className=" mt-2 font-[500] text-xl"></h2>
          <p className="font-[300] mt-2 text-slate-900 text-[1.1rem]">
            summary
          </p>
          <p className="mt-2">
            <a target="_blank">read more...</a>
          </p>
        </div>

        <div class=" text-white bg-black  shadow-2xl flex-none "></div>
      </div>
    </>
  );
}

export default SideBar;
