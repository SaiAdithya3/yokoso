import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysInMonth = {
  January: ["1st", "2nd", "3rd", "4th", "5th"],
  February: ["1st", "2nd", "3rd", "4th", "5th"],
  // Add more days for other months as needed
};

const Present = () => {
  const [selectedMonth, setSelectedMonth] = useState(months[0]);
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setOpenAccordion(null); 
  };

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="border bg-white px-4 py-2 rounded-md">
            {selectedMonth}
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Months</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {months.map((month, index) => (
            <DropdownMenuCheckboxItem
              key={index}
              checked={selectedMonth === month}
              onCheckedChange={(checked) => checked && handleMonthSelect(month)}
            >
              {month}
            </DropdownMenuCheckboxItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuLabel>Appearance</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showActivityBar}
            onCheckedChange={setShowActivityBar}
            disabled
          >
            Activity Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Accordion type="single" collapsible className="w-full mt-4 flex flex-col gap-2">
        {daysInMonth[selectedMonth].map((day, index) => (
          <AccordionItem key={index} value={`accordion-${index}`} className="border bg-white border-gray-300 px-6 rounded-xl  ">
            <AccordionTrigger>
              <div className=" flex w-full justify-between">
                <p>{day}</p>
                <p>Sunday</p>
                <div className=" flex gap-3">
                  <p>Total</p>
                  <p>10</p>
                </div>
                <div className=" flex gap-3">
                  <p>Attended</p>
                  <p>7</p>
                </div>
                <div className=" flex gap-3">
                  <p>Absent</p>
                  <p>3</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="p-4 ">
                {/* Replace this with the actual class content for the day */}
                <p>Classes for {day}:</p>
                <ul>
                  <li>Math</li>
                  <li>Science</li>
                  <li>History</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Present;
