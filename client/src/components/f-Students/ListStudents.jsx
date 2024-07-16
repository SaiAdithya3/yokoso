import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Table, TableHead, TableBody, TableCell, TableRow } from "../ui/table";
import sampleStudents from "./dummydata";
import { useNavigate } from "react-router-dom";
import Avatar from "boring-avatars";
const ListStudents = () => {
  const [students, setStudents] = useState(sampleStudents);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [view, setView] = useState("list");

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

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-white w-full ">
      <div className="flex justify-between items-center mb-4">
        <Input
          type="text"
          placeholder="Search students..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-1/3"
        />
        <div className="flex space-x-2">
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
              {filteredStudents.map((student) => (
                <TableRow
                onClick={() => navigate(`./${student.id}`)}
                 key={student.id}>
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
            {filteredStudents.map((student) => (
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
