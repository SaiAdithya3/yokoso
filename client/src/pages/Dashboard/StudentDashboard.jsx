import React from "react";
import StudentSidebar from "@/components/common/Nav/StudentSidebar";
import Avatar from "boring-avatars";
import { Link, useLocation } from "react-router-dom";
import Student from "../StudentFeat/Attendence.Student";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { MdNotifications } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { AlignHorizontalSpaceAroundIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import MessagesCard from "@/components/StudentDash/Attendence/MessageCard";

const StudentDashboard = ({ gotoAttendence }) => {
  const location = useLocation();
  const { pathname } = location;

  const courses = [
    {
      name: "Mathematics",
      attendance: "85%",
      cpa: "3.8",
      syllabusLink: "/syllabus/mathematics",
    },
    {
      name: "Science",
      attendance: "90%",
      cpa: "4.0",
      syllabusLink: "/syllabus/science",
    },
    {
      name: "History",
      attendance: "75%",
      cpa: "3.5",
      syllabusLink: "/syllabus/history",
    },
  ];

  const messages = [
    { content: "Welcome to the new semester!", date: "July 19, 2024" },
    { content: "Math midterm exam on August 10th.", date: "July 15, 2024" },
    {
      content: "Science project due date extended to July 30th.",
      date: "July 12, 2024",
    },
  ];

  return (
    <div className="flex gap-4 min-h-screen bg-white/40">
      <StudentSidebar />
      {gotoAttendence ? (
        <Student />
      ) : (
        <div className="flex flex-col w-full p-6 space-y-6">
          <div className="flex justify-between items-center border-b pb-4">
            <Breadcrumb className="hidden popp md:flex px-2 pb-2">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <div className="flex space-x-4 popp">
              <div className="flex gap-1 py-1 items-center rounded-lg px-2 bg-zinc-50 border-zinc-200 border">
                <CiSearch className="text-2xl text-slate-900" />
                <Input
                  type="text"
                  placeholder="Search...."
                  className="focus:outline-none   w-64 bg-zinc-50  popp "
                />
              </div>
              <Button variant="secondary" className="relative">
                <span className="absolute text-xs -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full">
                  2
                </span>
                <MdNotifications className="text-2xl" />
              </Button>
              <Button variant="primary" className="relative">
                <span className="absolute text-xs -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full">
                  2
                </span>
                <AlignHorizontalSpaceAroundIcon className="text-2xl" />
              </Button>
            </div>
          </div>
          {/* welcome card */}
          <div className="relative">
            <div>
              <div
                className="w-full  rounded-3xl h-48 bg-gradient-to-r
               from-blue-900/40 to-blue-800/70 p-2 shadow-lg"
              >
                <CardContent>
                  <CardTitle className="text-4xl mt-2 font-bold py-2">
                    Hi, Pavan Kumar 👋
                  </CardTitle>
                  <h1 className="text-2xl  mb-1 font-semibold">
                    Welcome to the new semester! 🎉
                  </h1>
                </CardContent>
              </div>
            </div>
            {/* assignments */}
            <div className="flex items-center justify-evenly w-full -mt-16 bg-transparent  md:flex-nowrap ">
              <div className="w-4/12">
                <Card className="  border-2 bg-white  border-zinc-50 shadow-lg  rounded-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold ">
                      Recent Assignments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 -mt-2">
                    {/*  assignments list */}
                    <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm">
                      <div>
                        <h3 className="text-lg font-medium">Math Homework</h3>
                        <p className="text-sm text-gray-600">
                          Due: 21st July, 2024
                        </p>
                      </div>
                      <Button variant="link" className="text-sky-600">
                        View Details
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm">
                      <div>
                        <h3 className="text-lg font-medium">Science Project</h3>
                        <p className="text-sm text-gray-600">
                          Due: 25th July, 2024
                        </p>
                      </div>
                      <Button variant="link" className="text-sky-600">
                        View Details
                      </Button>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm">
                      <div>
                        <h3 className="text-lg font-medium">History Essay</h3>
                        <p className="text-sm text-gray-600">
                          Due: 28th July, 2024
                        </p>
                      </div>
                      <Button variant="link" className="text-sky-600">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
       <div>
        <MessagesCard />
       </div>
              
            </div>
          </div>

          {/* My Courses Section */}
          <Card className="bg-white border border-zinc-50 shadow rounded-2xl p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold mb-4">
                My Courses
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow-sm"
                >
                  <div>
                    <h3 className="text-lg font-medium">{course.name}</h3>
                    <p className="text-sm text-gray-600">
                      Attendance: {course.attendance}
                    </p>
                    <p className="text-sm text-gray-600">CPA: {course.cpa}</p>
                  </div>
                  <Button variant="link" className="text-sky-600">
                    <Link to={course.syllabusLink}>Syllabus</Link>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default StudentDashboard;
