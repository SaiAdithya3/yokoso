import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { LuPlus } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";

import Avatar from "boring-avatars";
const Sidebar = () => {
  return (
    <div className=" flex h-fit   justify-between w-full px-4  mt-3 py-2 ">
      <div className=" flex gap-1 ">
        <div>
          <Avatar name="banaki" variant="beam" />
        </div>
        <div className="flex flex-col  items-center ">
          <h1 className="text-black  text-lg font-semibold ">Blake Blossom</h1>
          <h3 className="text-slate-500 text-xs font-light">
            Welcome back to Yokoso
          </h3>
        </div>
      </div>
      <div className=" flex items-center gap-6 ">
        {/* icons  */}
        <div className=" flex  gap-4">
          <CiSearch className=" text-2xl text-slate-500" />
          <IoIosNotificationsOutline className="text-2xl  text-slate-500" />
        </div>
        <div className=" flex h-fit gap-4">
          <div className="border rounded-md items-center flex gap-2 px-4 py-2">
            <RiCalendarScheduleLine className="text-slate-500 text-xl " />
            <h1>Scheule</h1>
          </div>
          <div  
            className="border bg-black   text-white rounded-md items-center 
          flex gap-2 px-4 py-2"
          >
            <LuPlus className="text-white text-xl " />
            <h1>New Assignment</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
