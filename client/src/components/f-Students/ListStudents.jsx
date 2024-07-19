import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Table, TableHead, TableBody, TableCell, TableRow } from "../ui/table";
import sampleStudents from "./dummydata";
import { useNavigate } from "react-router-dom";
import Avatar from "boring-avatars";
import { CiSearch } from "react-icons/ci";

const ListStudents = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [view, setView] = useState("list");
  const [selectedSection, setSelectedSection] = useState("Computer Engineering"); // Default section

  useEffect(() => {
    const filteredStudents = sampleStudents.filter(
      (student) => student.major === selectedSection
    );
    setStudents(filteredStudents);
  }, [selectedSection]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSort = (field) => {
    const order = sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
    const sortedStudents = [...students].sort((a, b) => {
      if (a[field] < b[field]) return order === "asc" ? -1 : 1;
      if (a[field] > b[field]) return order === "asc" ? 1 : -1;
      return 0;
    });
    setStudents(sortedStudents);
  };

  const navigate = useNavigate();

  const sectionNames = [
    "Computer Engineering",
    "Mechanical Engineering",
    "Electrical Engineering",
    "Civil Engineering",
    "Chemical Engineering",
    "Aerospace Engineering",
    "Biomedical Engineering",
    "Industrial Engineering",
    "Environmental Engineering",
    "Software Engineering",
  ];

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-1 py-1 w-1/3 items-center rounded-lg px-2 bg-zinc-200 border-black">
          <CiSearch className=" text-2xl text-slate-900" />
          <input type="text" placeholder="Search students" className=" focus:outline-none  rounded-lg w-full  bg-zinc-200 border-black/40 popp py-1" />
        </div>
        <div className="flex space-x-2">
          <div className="relative">
            <select
              value={selectedSection}
              onChange={(e) => setSelectedSection(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              {sectionNames.map((section, index) => (
                <option key={index} value={section}>
                  {section}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M9.293 12.95l3.354 3.353a1 1 0 101.414-1.414l-4.95-4.95a1 1 0 00-1.414 0l-4.95 4.95a1 1 0 001.414 1.414l3.354-3.353V18a1 1 0 102 0v-5.05z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <Button
            onClick={() => setView("list")}
            variant={view === "list" ? "secondary" : "outline"}
          >
            List View
          </Button>
          <Button
            onClick={() => setView("grid")}
            variant={view === "grid" ? "secondary" : "outline"}
          >
            Grid View
          </Button>
        </div>
      </div>

      <div>
        <div className="flex justify-end items-center gap-5 mb-2">
          <span className="bg-black px-5 rounded-lg py-1 text-white">Sort by:</span>
          <Button onClick={() => handleSort("name")} variant="link">
            Name
          </Button>
          <Button onClick={() => handleSort("grade")} variant="link">
            Grade
          </Button>
          <Button onClick={() => handleSort("attendance")} variant="link">
            Attendance
          </Button>
        </div>
        {view === "list" ? (
          <Table className="cursor-pointer">
            {/* <div className="flex items-center justify-between"> */}
            <TableHead className='bg-zinc-800 rounded-tl-xl text-white px-6'>Name</TableHead>
            <TableHead className='bg-zinc-800 ronded-tl-xl text-white px-6'>AdmissionNumber</TableHead>
            <TableHead className='bg-zinc-800 rouded-tl-xl text-white px-6'>Grade</TableHead>
            <TableHead className='bg-zinc-800 round-tl-xl text-white px-6'>Attendance</TableHead>
            <TableHead className='bg-zinc-800 rounde-xl text-white px-6'>Major</TableHead>
            <TableHead className='bg-zinc-800 rounded-tr-xl text-white px-6'>Email</TableHead>
            {/* </div> */}
            <TableBody>
              {students.map((student) => (
                <TableRow
                  key={student.id}
                  onClick={() => navigate(`./${student.id}`)}
                  className="hover:bg-gray-100"
                >
                  <TableCell className=''>
                    <div className="flex items-center">
                      <span className="text-sm pr-4 font-semibold">{student.id}</span>
                      <Avatar size={34} name={student.name} variant="beam" />
                      <span className="ml-2">{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className='text-center px-6'>{student.id}AT{student.id}</TableCell>
                  <TableCell className='text-center px-6'>{student.grade}</TableCell>
                  <TableCell className='text-center px-6'>{student.attendance}%</TableCell>
                  <TableCell className='px-6'>{student.major}</TableCell>
                  <TableCell className='text-center px-6'>{student.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {students.map((student) => (
              <div
                key={student.id}
                className="px-8 py-4 border cursor-pointer rounded-xl bg-zinc-50 mb-2 flex items-start"
              >
                <Avatar
                  size={60}
                  name={student.name}
                  variant="beam"
                  colors={[
                    "#92A1C6",
                    "#146A7C",
                    "#F0AB3D",
                    "#C271B4",
                    "#C20D90",
                  ]}
                />
                <div className="ml-4">
                  <h4 className="font-semibold">{student.name}</h4>
                  <p>Grade: {student.grade}</p>
                  <p>Attendance: {student.attendance}%</p>
                  <p>Major: {student.major}</p>
                  <p>Email: {student.email}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListStudents;
