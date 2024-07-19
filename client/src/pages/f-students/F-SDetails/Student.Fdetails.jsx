import React from "react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Fresult from "./Student.Fresult";
import { LineChart, CartesianGrid, XAxis, Line } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import StudentGraph from "./Student.FlineChart";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import Avatar from "boring-avatars";


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
    <div className="flex-col flex px-2 py- bg-gray-100/30 w-full">
      <div className="flex flex-col justify-between bg-gray-50/50 backdrop-blur-sm sticky top-0 items-start p-3 gap-3 border-b border-black/30 mb-6">
        <Breadcrumb className="hidden md:flex pt-2 pb-1 ">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to={-1}>Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Students</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Student ID : 12205080</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-3xl font-semibold">Student Information </h1>
      </div>
      <div className="w-full items-center flex gap-2">
        <Profile />
        <ProfileInformation />
      </div>
      <div className="flex px-4 flex-col w-full gap-4">
      <StudentGraph />
      <Fresult />
      </div>
    </div>
  );
};

const ProfileInformation = () => {
  return (
    <div className="w-[45rem] h-full py-4">
      <div className="bg-background border border-zinc-200 shadow rounded-xl p-6">
        <h1 className="text-2xl font-bold">Personal Information</h1>
        <Separator className="my-4" />
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="font-medium">Roll No:</div>
            <div className="text-primary font-semibold">123456</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium">Branch:</div>
            <div className="text-primary font-semibold">CSE</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium">Section:</div>
            <div className="text-primary font-semibold">A</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium">Batch:</div>
            <div className="text-primary font-semibold">2022</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium">Email:</div>
            <div className="text-primary font-semibold"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium">Email:</div>
            <div className="text-primary font-semibold"></div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium">Email:</div>
            <div className="text-primary font-semibold"></div>
          </div>
        </div>
      </div>
    </div>
  );

}

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
      <div className="bg-background rounded-xl border shadow p-6">
        <div className="flex items-center gap-4">
          {/* <div className="rounded-full w-20 h-20 bg-muted flex items-center justify-center text-4xl font-bold">
            JD
          </div> */}
          <Avatar size={100} name="Shivaigadapa" variant="beam" />
          <div>
            <h1 className="text-2xl font-bold">Darth Vader</h1>
            <div className="text-muted-foreground">
              <span>Student ID: 12205080</span>
              <span className="mx-2">|</span>
              <span>B.Tech CSE 2nd</span>
              <span className="mx-2">|</span>
              <span>Section D </span>
            </div>
          </div>
        </div>
        <Separator className="my-6" />
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <div className="font-medium">Batch:</div>
            <div className="text-primary font-semibold">2021 - 2025</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium">Current CGPA: </div>
            <div className="text-primary font-semibold">9.8</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="font-medium">Total Attendance</div>
            <div className="text-primary font-semibold">95%</div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="grid gap-4">
          <Button className="w-full">Send Message</Button>
        </div>
      </div>
    </div>
  );
};


export default Fdetails;