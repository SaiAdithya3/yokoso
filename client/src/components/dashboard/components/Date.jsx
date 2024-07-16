import React, { useState } from "react";
import { format, addDays, subDays, isSameDay } from "date-fns";
import { ChevronLeft, ChevronRight } from "lucide-react";
const DateScheduler = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const nextDays = () => {
    setStartDate(addDays(startDate, 5));
  };

  const prevDays = () => {
    setStartDate(subDays(startDate, 5));
  };

  const onDateClick = (day) => {
    setSelectedDate(day);
  };

  const renderHeader = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="flex justify-between items-center bg-gray-400/10 px-2 py-1 rounded-lg">
        <button
          onClick={prevDays}
          className="px-2 py-1 hover:bg-white/50 bg-white border rounded-md"
        >
          <ChevronLeft />
        </button>
        <span className="text-xl">{format(startDate, dateFormat)}</span>
        <button
          onClick={nextDays}
          className="px-2 py-1 hover:bg-white/50 bg-white border rounded-md"
        >
          <ChevronRight />
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    for (let i = 0; i < 5; i++) {
      const day = addDays(startDate, i);
      const formattedDate = format(day, "d");

      days.push(
        <div
          key={day}
          className={` text-center cursor-pointer transition-all   duration-200 ${
            isSameDay(day, selectedDate) ? "bg-blue-600 w-12 px-2 py-2 flex flex-col rounded-xl text-white" : " px-2 py-2 flex flex-col rounded-xl"
          }`}
          onClick={() => onDateClick(day)}
        >
          <span>{format(day, "eee")}</span>
          <span>{formattedDate}</span>
        </div>
      );
    }
    return <div className="flex gap-2 justify-around p-2">{days}</div>;
  };

  const renderSchedule = () => {
    const dateFormat = "MMMM d, yyyy";
    return (
      <div className="mt-4 p-4 border rounded-md">
        <h2 className="text-xl">
          Schedule for {format(selectedDate, dateFormat)}
        </h2>
        {/* Add your schedule items here */}
        <ul>
          <li>9:00 AM - Meeting with team</li>
          <li>12:00 PM - Lunch</li>
          <li>3:00 PM - Code Review</li>
        </ul>
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto p-4">
      {renderHeader()}
      {renderDays()}
      {renderSchedule()}
    </div>
  );
};

export default DateScheduler;
