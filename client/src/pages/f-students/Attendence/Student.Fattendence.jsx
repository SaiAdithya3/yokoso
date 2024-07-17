import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const students = [
  { name: "John Doe", id: "12345", email: "john.doe@example.com" },
  { name: "Emily Davis", id: "23579", email: "emily.davis@example.com" },
  { name: "Michael Johnson", id: "34680", email: "michael.johnson@example.com" },
  { name: "Jane Smith", id: "67890", email: "jane.smith@example.com" },
  { name: "Michael Johnson", id: "64680", email: "michael.johnson@example.com" },
  { name: "Emily Davis", id: "33579", email: "emily.davis@example.com" },
  { name: "David Lee", id: "97531", email: "david.lee@example.com" },
  { name: "Emily Davis", id: "43579", email: "emily.davis@example.com" },
  { name: "Michael Johnson", id: "74680", email: "michael.johnson@example.com" },
];

const timeOptions = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
];

const chapterOptions = ["Algebra", "Geometry", "Calculus", "Statistics"];

export default function Component() {
  const [attendance, setAttendance] = useState(
    students.reduce((acc, student) => {
      acc[student.id] = true; // Set all students as present initially
      return acc;
    }, {})
  );

  return (
    <div className="flex flex-col lg:flex-row w-full gap-8 p-6 lg:p-8">
      <div className="flex-1 bg-background rounded-lg border">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex flex-col">
              <div className="text-sm font-semibold">Select Time</div>
              <SelectComponent placeholder="Select Time" options={timeOptions} />
            </div>
            <div>
              <div className="text-sm font-medium">Chapter</div>
              <SelectComponent placeholder="Select Chapter" options={chapterOptions} />
            </div>
            <InfoBlock title="Section" content="A" />
            <InfoBlock title="Course" content="Math 101" />
            <div className="flex items-center gap-4">
              <InfoBlock title="Teacher" content="John Doe" />
            </div>
          </div>
        </div>
        <div className="h-[35rem] overflow-y-scroll">
          <AttendanceTable students={students} attendance={attendance} setAttendance={setAttendance} />
        </div>
      </div>
      <AttendanceSummary attendance={attendance} />
    </div>
  );
}

function SelectComponent({ placeholder, options }) {
  return (
    <Select>
      <SelectTrigger className="w-40">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option, index) => (
          <SelectItem key={index} value={option}>
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

function InfoBlock({ title, content }) {
  return (
    <div>
      <div className="text-sm font-medium">{title}</div>
      <div className="text-muted-foreground text-sm">{content}</div>
    </div>
  );
}

function AttendanceTable({ students, attendance, setAttendance }) {
  const toggleAttendance = (id) => {
    setAttendance((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <table className="w-full table-auto">
      <thead className="bg-muted">
        <tr>
          <th className="px-4 py-3 text-left font-medium">Name</th>
          <th className="px-4 py-3 text-left font-medium">Student ID</th>
          <th className="px-4 py-3 text-left font-medium">Email</th>
          <th className="px-4 py-3 text-center font-medium">Attendance</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student, index) => (
          <tr key={index} className="border-b bg-background even:bg-muted/20">
            <td className="px-4 py-3">{student.name}</td>
            <td className="px-4 py-3">{student.id}</td>
            <td className="px-4 py-3">{student.email}</td>
            <td className="px-4 py-3 text-center">
              <Toggle
                aria-label="Toggle attendance"
                onClick={() => toggleAttendance(student.id)}
                className={attendance[student.id] ? "bg-green-200" : "!bg-red-300"}
              >
                {attendance[student.id] ? (
                  <CheckIcon className="h-5 w-5 text-primary" />
                ) : (
                  <XIcon className="h-5 w-5 text-primary" />
                )}
              </Toggle>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function AttendanceSummary({ attendance }) {
  const presentCount = Object.values(attendance).filter(Boolean).length;
  const absentCount = Object.values(attendance).length - presentCount;

  return (
    <div className="w-full max-w-md lg:w-auto">
      <Card>
        <CardHeader>
          <CardTitle>Attendance Summary</CardTitle>
          <CardDescription>
            View the overall attendance for the class.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <SummaryItem label="Present" count={presentCount} />
          <SummaryItem label="Absent" count={absentCount} />
          <SummaryItem label="Total Students" count={Object.keys(attendance).length} />
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline">Download Report</Button>
          <Button>Take Attendance</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function SummaryItem({ label, count }) {
  return (
    <div className="flex items-center justify-between">
      <div>{label}</div>
      <div className="font-medium">{count}</div>
    </div>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
