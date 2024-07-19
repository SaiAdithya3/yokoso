import React from "react";
import SectionList from "./SectionList";
import Assignments from "./Assignments";
import HodTasks from "./HodTasks";
import Sidebar from "./Sidebar";
import TimeTable from "./TimeTable";
import Announcements from "./Annoucements";

const CardPage = () => {
  return (
    <div className="flex   w-full flex-col">
      <div className="sticky top-0 bg-white/50 backdrop-blur-sm w-full">
        <Sidebar className="" />
      </div>
      <div className=" flex md:flex-nowrap flex-wrap  w-full gap-5 p-2">
        <div className=" flex  md:flex-nowrap flex-wrap flex-col gap-5">
          <div className="w-full flex flex-col gap-5">
            <div className="w-full flex rounded-2xl text-white flex-col bg-gradient-to-r from-blue-900/40 to-blue-800/70 p-10 shadow-lg">
              <h1 className='text-4xl font-bold py-2'>Hi, Sung Jun woo 👋 </h1>
              <h1 className='text-3xl font-semibold popp'>Ready to Hunt some demons today ? </h1>
            </div>
            <div className="flex md:flex-nowrap flex-wrap gap-5">
              <SectionList />
              <Assignments />
            </div>
          </div>
          <div className="flex  md:flex-nowrap flex-wrap  gap-5">
            <HodTasks />
            <Announcements />
          </div>
        </div>

        <div className="flex  md:flex-nowrap flex-wrap gap-5 w-full ">
          <TimeTable />
        </div>
      </div>
    </div>
  );
};

export default CardPage;
