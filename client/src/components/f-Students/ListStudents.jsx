import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Table, TableHead, TableBody, TableCell, TableRow } from "../ui/table";
import sampleStudents from "./dummydata";
import { useNavigate } from "react-router-dom";
import Avatar from "boring-avatars";

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
    <div className="p-4 bg-white w-full">
      <div className="flex justify-between items-center mb-4">
        <Input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-1/3"
        />
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
          <span>Sort by:</span>
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
            <TableHead>
              <TableRow className="w-full">
                <TableCell>Name</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>Attendance</TableCell>
                <TableCell>Major</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow
                  key={student.id}
                  onClick={() => navigate(`./${student.id}`)}
                >
                  <TableCell>
                    <div className="flex items-center">
                      <Avatar size={34} name={student.name} variant="beam" />
                      <span className="ml-2">{student.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>{student.grade}</TableCell>
                  <TableCell>{student.attendance}%</TableCell>
                  <TableCell>{student.major}</TableCell>
                  <TableCell>{student.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {students.map((student) => (
              <div
                key={student.id}
                className="p-4 border cursor-pointer rounded-lg mb-2 flex items-center"
              >
                <Avatar
                  size={40}
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
