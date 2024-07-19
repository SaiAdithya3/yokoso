import React, { useState } from 'react';
import StudentSidebar from '@/components/common/Nav/StudentSidebar';
import SemesterDropdown from './SemesterDropdown';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import cloud from '@/assets/server.png';
import binary from '@/assets/binary.png';
import db from '@/assets/database-storage.png';

const TeachingContent = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState("Semester 1");

  // Sample data for subjects
  const subjects = [
    {
      id: 1,
      courseID: 'CSE101',
      courseName: 'Introduction to Computer Science',
      color: 'bg-blue-200',
      border: 'border-blue-400',
      image: binary,
    },
    {
      id: 2,
      courseID: 'MEC102',
      courseName: 'Mechanical Engineering Basics',
      image: cloud,
      color: 'bg-red-200',
      border: 'border-red-400',
    },
    {
      id: 3,
      courseID: 'CSE201',
      courseName: 'Data Structures and Algorithms',
      color: 'bg-green-200',
      border: 'border-green-400',
      image: db,
    },
    {
      id: 4,
      courseID: 'CSE301',
      courseName: 'Operating Systems',
      color: 'bg-yellow-200',
      border: 'border-yellow-400',
      image: cloud,
    },
    {
      id: 5,
      courseID: 'CSE401',
      courseName: 'Machine Learning',
      color: 'bg-purple-200',
      border: 'border-purple-400',
      image: db,
    },
    {
      id: 6,
      courseID: 'CSE501',
      courseName: 'Artificial Intelligence',
      color: 'bg-pink-200',
      border: 'border-pink-400',
      image: binary,
    },
  ];

  // Function to handle click on a subject
  const handleSubjectClick = (subject) => {
    setSelectedSubject(selectedSubject === subject ? null : subject);
  };

  return (
    <div className="flex gap-4 bg-slate-100">
      <StudentSidebar />
      <div className="w-full p-4">
        <div className="flex flex-col sticky top-0 bg-slate-100/50 backdrop-blur-sm">
          <Breadcrumb className="hidden md:flex px-2 pb-2">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to={-1}>Dashboard</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Teaching Outcomes</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-3xl font-semibold mb-6 border-b p pb-6">Teaching Content</h1>
        </div>
        <div className="flex w-full border rounded-xl m-2 p-3 px-8 bg-white items-center justify-between gap-3">
          <h1 className="text-lg font-semibold">Select a subject to view details:</h1>
          <SemesterDropdown selectedSemester={selectedSemester} onSelectSemester={setSelectedSemester} />
        </div>

        <div className="w-full flex flex-wrap justify-evenly p-6 gap-4">
          {subjects.map((subject) => (
            <Link to={`/s/lms/subject/${subject.id}`} key={subject.id} className={`flex hover:scale-105 transition-all flex-col items-center gap-2 w-1/4 border-2 cursor-pointer rounded-xl mb-4 p-6 ${subject.color} ${subject.border}`}>
              <img src={subject.image} alt="server" className="w-20 h-20 mx-auto mt-4" />
              <h2 className="text-2xl font-semibold text-center">{subject.courseID}</h2>
              <p className="text-md text-center">{subject.courseName}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachingContent;
