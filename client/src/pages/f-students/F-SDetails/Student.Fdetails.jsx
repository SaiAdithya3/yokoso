import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Fresult from "./Student.Fresult";
import { LineChart, CartesianGrid, XAxis, Line } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import  StudentGraph  from "./Student.FlineChart";

const Fdetails = () => {
  const semesterData = [
    { semester: 1, tgpa: 3.8 },
    { semester: 2, tgpa: 3.9 },
    { semester: 3, tgpa: 4.0 },
    { semester: 4, tgpa: 3.7 },
    { semester: 5, tgpa: 3.9 },
    { semester: 6, tgpa: 4.0 },
    { semester: 7, tgpa: 3.8 },
    { semester: 8, tgpa: 3.9 },
  ];

  return (
    <div className="flex-col flex px-2 py-4 bg-gray-100/30 w-full">
      <Profile />
      <StudentGraph/>
      <Fresult />
    </div>
  );
};

const Profile = () => {
  const studentDetails = [
    { label: "Roll No:", value: "123456" },
    { label: "Branch:", value: "CSE" },
    { label: "Section:", value: "A" },
    { label: "Batch:", value: "2022" },
    { label: "Email:", value: "shiva@devatoms.com" },
  ];
  const StudentPersonalDetails = [
    { label: "Age:", value: "21" },
    { label: "City", value: "Guntur" },
    { label: "State", value: "Andhra Pradesh" },
    { label: "phone", value: "1234567890" },
    { label: "email", value: "shivatadigadapa@ggmail.com" },
    { label: "Father Name:", value: "Tadigadapa Venkateswara Rao" },
    { label: "Mother Name:", value: "Tadigadapa Lakshmi" },
    { label: "Date of Birth:", value: "12-12-2000" },
    {
      label: "Address:",
      value: "H.No: 1-1-1, Guntur, Andhra Pradesh, 522001",
    },
  ];

  return (
    <div className="w-[30rem] p-4">
      <div className="bg-background rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-4">
          <div className="rounded-full w-20 h-20 bg-muted flex items-center justify-center text-4xl font-bold">
            JD
          </div>
          <div>
            <h1 className="text-2xl font-bold">John Doe</h1>
            <div className="text-muted-foreground">
              <span>Age: 15</span>
              <span className="mx-2">|</span>
              <span>Grade: 10th</span>
              <span className="mx-2">|</span>
              <span>Student ID: 12345</span>
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="font-medium">Subjects</div>
            <div className="text-primary font-semibold">12</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium">Disciplinary Cases</div>
            <div className="text-primary font-semibold">2</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium">Attendance</div>
            <div className="text-primary font-semibold">95%</div>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="grid gap-4">
          <Button variant="outline" className="w-full">
            Raise Disciplinary Action
          </Button>
          <Button className="w-full">Send Message</Button>
        </div>
      </div>
    </div>
  );
};


export default Fdetails;