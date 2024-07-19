import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { LuPlus } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { MdNotifications } from 'react-icons/md';
import { AlignHorizontalSpaceAroundIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import Avatar from "boring-avatars";
import { Input } from "@/components/ui/input";
const Sidebar = () => {
  return (
    <div className=" flex h-fit border-b pb-4 items-center justify-between w-full px-4  mt-3 py-2 ">
      <div className=" flex gap-3 cursor-pointer px-2 pr-6 py-1.5 rounded-lg">
        {/* <Avatar name="banaki" variant="beam" /> */}
        <Breadcrumb className="hidden popp md:flex px-2 pb-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={-1}>Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Overview</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex gap-1 py-1 w-1/3 items-center rounded-lg px-2 bg-slate-200 border-black">
        <CiSearch className=" text-2xl text-slate-900" />
        <input type="text" placeholder="Search students" className=" focus:outline-none  rounded-lg w-full  bg-slate-200 border-black/40 popp py-1" />
      </div>
      <div className=" flex items-center gap-6 ">
        {/* icons  */}
        <div className=" flex  gap-4">
          <button className=" text-black relative px-2 py-2 rounded-lg">
            <span className="absolute text-xs -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full">2</span>
            <MdNotifications className='text-2xl' />
          </button>
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
