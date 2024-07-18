import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { LuPlus } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";

import Avatar from "boring-avatars";
import { Input } from "@/components/ui/input";
const Sidebar = () => {
  return (
    <div className=" flex h-fit items-center justify-between w-full px-4  mt-3 py-2 ">
      <div className=" flex gap-3 hover:bg-slate-100 cursor-pointer px-2 pr-6 py-1.5 rounded-lg">
        {/* <Avatar name="banaki" variant="beam" /> */}
        <div className="flex flex-col items-start ">
          <h1 className="text-black  text-lg font-semibold ">Blake Blossom</h1>
          <h3 className="text-slate-500 text-xs font-light">  Welcome back to Yokoso </h3>
        </div>
      </div>
      <input type="text" placeholder="Search students" className="border focus:outline-none focus:ring-2 rounded-lg w-1/3 px-6 bg-zinc-50 border-black/40 popp py-1" />
      <div className=" flex items-center gap-6 ">
        {/* icons  */}
        <div className=" flex  gap-4">
          <CiSearch className=" text-2xl text-slate-500" />
          <IoIosNotificationsOutline className="text-2xl  text-slate-500" />
        </div>
        <div className=" flex h-fit gap-4">
          <div className="border rounded-lg cursor-pointer hover:bg-zinc-100 transition-all items-center flex gap-2 px-4 py-2">
            <RiCalendarScheduleLine className="text-slate-500 text-xl " />
            <h1>Scheule</h1>
          </div>
          <div className="border bg-black text-sm cursor-pointer hover:scale-105 transition-all text-white rounded-lg items-center flex gap-2 px-4 py-2">
            <LuPlus className="text-white text-lg " />
            <h1>New Assignment</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
