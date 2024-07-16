import React from "react";

const ClassTime = () => {
  return (
    <>
    <div className="  flex flex-col gap-4">

      <div className="flex flex-col w-full  gap-8 bg-gradient-to-b from-orange-200 to-gray-100/50  rounded-xl p-4">
        <div className=" ">
          <p className=" text-orange-900/90 font-semibold">
            OPERATING SYSTEM CLASS - K21GX
          </p>
          <p className=" text-xs text-orange-900/80">8:00 - 9:00 AM (UTC)</p>
        </div>
        <div className="flex w-full justify-between">
          <p className=" uppercase  text-sm font-semibold text-orange-900/70">
            on - 38-907
          </p>
          <div className="  border-orange-900  border-2 px-2 uppercase rounded-lg text-orange-900">
            <p>OS - k21gx</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full  gap-8 bg-gradient-to-b from-blue-200 to-gray-100/50  rounded-xl p-4">
        <div className=" ">
          <p className=" text-blue-900/90 font-semibold">
            OPERATING SYSTEM CLASS - K21GX
          </p>
          <p className=" text-xs text-blue-900/80">8:00 - 9:00 AM (UTC)</p>
        </div>
        <div className="flex w-full justify-between">
          <p className=" uppercase  text-sm font-semibold text-blue-900/70">
            on - 38-907
          </p>
          <div className="  border-blue-900  border-2 px-2 uppercase rounded-lg text-blue-900">
            <p>OS - k21gx</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ClassTime;
