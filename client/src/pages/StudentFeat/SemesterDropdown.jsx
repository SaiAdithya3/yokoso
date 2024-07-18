import React, { useState } from 'react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuCheckboxItem, DropdownMenuLabel, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { FaChevronDown } from "react-icons/fa";

const semesters = [
  "Semester 1", "Semester 2", "Semester 3", "Semester 4",
  "Semester 5", "Semester 6", "Semester 7", "Semester 8"
];

const SemesterDropdown = ({ selectedSemester, onSelectSemester }) => {
  const [showResults, setShowResults] = useState(true); // Example state for results visibility

  const handleSemesterSelect = (semester) => {
    onSelectSemester(semester);
    setShowResults(true); // Reset other states or logic as needed
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="border bg-white/70 border-zinc-300 px-4 py-2 rounded-md flex items-center gap-2">
          {selectedSemester}
          <FaChevronDown className="ml-2 text-gray-500" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Semesters</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {semesters.map((semester, index) => (
          <DropdownMenuCheckboxItem
            key={index}
            checked={selectedSemester === semester}
            onCheckedChange={(checked) => checked && handleSemesterSelect(semester)}
          >
            {semester}
          </DropdownMenuCheckboxItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Results</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showResults}
          onCheckedChange={setShowResults}
        >
          Show Results
        </DropdownMenuCheckboxItem>
        {/* Add more checkboxes for additional functionality */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SemesterDropdown;
