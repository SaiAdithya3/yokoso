import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";
import Schedule from "./TimeTable.Schedule";
import DateScheduler from "./Date";

const TimeTable = () => {
  return (
    <div className="   rounded-2xl border w-full h-full p-4">
      <div className=" flex  items-center  justify-between">
        <h1 className=" text-lg">Time Table</h1>
        <button className=" px-3 py-1 border   rounded-lg">See All</button>
      </div>
      <div>
        <DateScheduler />
      </div>
      <div>
        <Schedule />
      </div>
    </div>
  );
};

export default TimeTable;
