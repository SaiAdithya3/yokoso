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
      <div className=" w-full">
        <Sidebar className="" />
      </div>
      <div className=" flex md:flex-nowrap flex-wrap  w-full gap-5 p-2">
        <div className=" flex  md:flex-nowrap flex-wrap flex-col gap-5">
          <div className="flex  md:flex-nowrap flex-wrap gap-5">
            <SectionList />
            <Assignments />
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
