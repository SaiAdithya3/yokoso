import React, { useState } from 'react';
import FacultySidebar from '@/components/common/Nav/FacultySidebar';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { MdOutlineClass } from "react-icons/md";
import { PiChalkboardTeacherBold } from "react-icons/pi";

const Facultylms   = () => {
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");

  // Sample data for a single faculty's course with units (chapters) and topics
  const course = {
    id: 1,
    courseID: 'CSE101',
    courseName: 'Introduction to Computer Science',
    lecturer: 'Dr. Aizen Heathrow',
    units: [
      {
        id: 1,
        unitName: 'Introduction to Programming',
        topics: ['Programming Basics', 'Variables and Data Types', 'Control Flow'],
      },
      {
        id: 2,
        unitName: 'Data Structures',
        topics: ['Arrays', 'Linked Lists', 'Stacks and Queues', 'Trees', 'Graphs'],
      },
      {
        id: 3,
        unitName: 'Algorithms',
        topics: ['Sorting Algorithms', 'Searching Algorithms', 'Dynamic Programming', 'Graph Algorithms'],
      },
    ],
  };

  return (
    <div className="flex bg-zinc-50 gap-4">
      <FacultySidebar />
      <div className="w-full bg-zinc-50 p-4">
        {/* Breadcrumbs */}
        <Breadcrumb className="hidden md:flex px-2 pt-3 pb-2">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Dashboard</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Teaching Outcomes</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Course Details</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Title */}
        <h1 className="text-3xl font-semibold px-2 mb-6 border-b pb-6">Course Details - {course.courseName}</h1>

        {/* Course Information */}
        <div className="flex w-full rounded-xl m-2 p-2 gap-3">
          <div className="flex items-center gap-5 p-6 bg-green-50 border border-green-200 rounded-xl">
            <MdOutlineClass className="text-6xl p-2 bg-green-200 rounded-full border border-green-300 text-green-800" />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">{course.courseName}</h2>
              <p className="text-sm text-gray-600">{course.courseID}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-6 bg-red-50 border border-red-200 rounded-xl">
            <PiChalkboardTeacherBold className="text-6xl p-2.5 bg-red-200 rounded-full border border-red-300 text-red-800" />
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">Lecturer / Faculty</h2>
              <p className="text-sm text-gray-600">{course.lecturer}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 px-4 w-2/5 border-green-400 rounded-xl">
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-lg w-full bg-zinc-900 py-2 cursor-pointer transition-all hover:scale-105 text-center rounded-xl text-white font-semibold">Attendance</h2>
              <h2 className="text-lg w-full bg-emerald-600 py-2 cursor-pointer transition-all hover:scale-105 text-center rounded-xl text-emerald-50 font-semibold">Download Syllabus</h2>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-lg w-full bg-yellow-400 py-2 cursor-pointer transition-all hover:scale-105 text-center rounded-xl text-yellow-800 font-semibold">Assignments</h2>
              <h2 className="text-lg w-full bg-orange-400 py-2 cursor-pointer transition-all hover:scale-105 text-center rounded-xl text-orange-50 font-semibold">Others</h2>
            </div>
          </div>
        </div>

        {/* Course Units and Topics */}
        <div className="bg-white p-4 flex flex-col gap-4 rounded-lg mb-4">
          {/* Accordion for Units and Topics */}
          <Accordion type="single" collapsible className="flex flex-col gap-3 w-full">
            {course.units.map((unit) => (
              <AccordionItem key={unit.id} value={unit.id} className="border bg-white border-gray-300 px-6 rounded-xl">
                <AccordionTrigger>
                  <div className="flex justify-between items-center p- cursor-pointer">
                    <h1 className="text-lg font-semibold">Unit {unit.id} - {unit.unitName} ({unit.topics.length} topics)</h1>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="p-4">
                    <div>
                      {unit.topics.map((topic, index) => (
                        <div key={index} className="flex items-center text-md popp py-1.5 gap-2">
                          <span className="text-gray-600">- {topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Facultylms;
