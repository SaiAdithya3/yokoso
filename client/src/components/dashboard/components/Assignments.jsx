import React from "react";

const Assignments = () => {
  return (
    <div className=" border-b  border w-[22rem] rounded-2xl  px-4  pb-4">
      <div className="py-4 px-2 flex items-center justify-between w-ful border-b mb-4">
        <h1 className="text-xl  font-semibold">Assignments</h1>
        <button className=' px-3 py-1 border text-xs hover:ring-2 rounded-lg'>See All</button>
      </div>
      <div className=" flex flex-col font-semibold gap-3">
        <div className="  flex items-center  justify-between">
          <div className=" flex flex-col gap-1">
            <h1 className=" text-base ">Assignment 1</h1>
            {/* <p className=" text-sm w-[30%]  ">Discription: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Ut in nulla elementum, lacinia purus.</p>  */}
            <p className=" text-xs w-full text-gray-500">Due: 21st June 2024</p>
          </div>
          <div className=" flex flex-col gap-1  ">
            <div className="  bg-orange-100 w-fit px-4 py-1 text-xs rounded-lg ">
              Pending
            </div>
          </div>
        </div>
        <hr className="  my-1" />
        <div className=" flex items-center  justify-between">
          <div className=" flex flex-col gap-1">
            <h1 className=" text-base ">Assignment 1</h1>
            {/* <p className=" text-sm w-[30%]  ">Discription: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Ut in nulla elementum, lacinia purus.</p>  */}
            <p className=" text-xs w-full text-gray-500">Due: 12/12/2021</p>
          </div>
          <div className=" flex flex-col gap-1  ">
            <div className="  bg-orange-100 w-fit px-4 py-1 text-xs rounded-lg ">
              Pending
            </div>
          </div>
        </div>
        <hr className="  my-1" />
        <div className=" flex items-center  justify-between">
          <div className=" flex flex-col gap-1">
            <h1 className=" text-base ">Assignment 1</h1>
            {/* <p className=" text-sm w-[30%]  ">Discription: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Ut in nulla elementum, lacinia purus.</p>  */}
            <p className=" text-xs w-full text-gray-500">Due: 12/12/2021</p>
          </div>
          <div className=" flex flex-col gap-1  ">
            <div className="  bg-orange-100 w-fit px-4 py-1 text-xs rounded-lg ">
              Pending
            </div>
          </div>
        </div>
        <hr className="  my-1" />
        <div className=" flex items-center  justify-between">
          <div className=" flex flex-col gap-1">
            <h1 className=" text-base ">Assignment 1</h1>
            {/* <p className=" text-sm w-[30%]  ">Discription: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, eleifend nunc. Ut in nulla elementum, lacinia purus.</p>  */}
            <p className=" text-xs w-full text-gray-500">Due: 12/12/2021</p>
          </div>
          <div className=" flex flex-col gap-1  ">
            <div className="  bg-orange-100 w-fit px-4 py-1 text-xs rounded-lg ">
              Pending
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
