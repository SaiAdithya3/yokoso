import React, { useState } from 'react';
import FacultySidebar from '@/components/common/Nav/FacultySidebar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FacultyAssignment = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      name: 'Assignment 1',
      uploadDate: '2024-07-10',
      lastDate: '2024-07-20',
      section: 'A',
    },
    {
      id: 2,
      name: 'Assignment 2',
      uploadDate: '2024-07-12',
      lastDate: '2024-07-22',
      section: 'B',
    },
  ]);
  const [sortBy, setSortBy] = useState('name');
  const [filter, setFilter] = useState('');

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCreateAssignment = (e) => {
    e.preventDefault();
    const newAssignment = {
      id: assignments.length + 1,
      name: e.target.name.value,
      uploadDate: new Date().toISOString().split('T')[0],
      lastDate: e.target.lastDate.value,
      section: e.target.section.value,
    };
    setAssignments([...assignments, newAssignment]);
    handleCloseModal();
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const sortedAssignments = [...assignments].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'uploadDate') {
      return new Date(a.uploadDate) - new Date(b.uploadDate);
    } else if (sortBy === 'lastDate') {
      return new Date(a.lastDate) - new Date(b.lastDate);
    } else if (sortBy === 'section') {
      return a.section.localeCompare(b.section);
    }
    return 0;
  });

  const filteredAssignments = sortedAssignments.filter((assignment) =>
    assignment.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="flex gap-4 min-h-screen bg-gray-50">
      <FacultySidebar />
      {/* <div className="w-1/2 flex gap-2"></div> */}
      <div className="w-full flex items-start justify-center p-12">

        <div className="flex flex-col p-4 w-11/12">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-semibold">Assignments</h1>
            <Button onClick={handleOpenModal}>Create New Assignment</Button>
          </div>
          <div className="flex justify-between items-center mb-4">
            <Input
              type="text"
              placeholder="Search assignments..."
              value={filter}
              onChange={handleFilterChange}
              className="mr-4"
            />
            <select
              value={sortBy}
              onChange={handleSortChange}
              className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Sort by Name</option>
              <option value="uploadDate">Sort by Upload Date</option>
              <option value="lastDate">Sort by Last Date</option>
              <option value="section">Sort by Section</option>
            </select>
          </div>
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead>
              <tr>
                <th className="py-3 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm text-left">Assignment Name</th>
                <th className="py-3 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm text-left">Uploaded Date</th>
                <th className="py-3 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm text-left">Last Date</th>
                <th className="py-3 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm text-left">Section</th>
                <th className="py-3 px-4 bg-gray-200 text-gray-600 font-bold uppercase text-sm text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredAssignments.map((assignment) => (
                <tr key={assignment.id} className="border-t">
                  <td className="py-3 px-4 text-left">{assignment.name}</td>
                  <td className="py-3 px-4 text-left">{assignment.uploadDate}</td>
                  <td className="py-3 px-4 text-left">{assignment.lastDate}</td>
                  <td className="py-3 px-4 text-left">{assignment.section}</td>
                  <td className="py-3 px-4 text-left">
                    <Link className='border px-2 py-1 rounded-lg bg-zinc-50' to={`/f/assignments/${assignment.id}`}>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <form onSubmit={handleCreateAssignment} className="p-4">
            <h2 className="text-2xl mb-4">Create New Assignment</h2>
            <div className="mb-4">
              <Label htmlFor="name">Assignment Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="mb-4">
              <Label htmlFor="lastDate">Last Date</Label>
              <Input id="lastDate" name="lastDate" type="date" required />
            </div>
            <div className="mb-4">
              <Label htmlFor="section">Section</Label>
              <Input id="section" name="section" required />
            </div>
            <div className="mb-4">
              <Label htmlFor="section">File Upload</Label>
              <input type="file"
                className='border border-gray-300 p-2 w-full'
              />
            </div>
            <div className="flex justify-end">
              <Button type="button" onClick={handleCloseModal} className="mr-2">Cancel</Button>
              <Button type="submit">Create</Button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

const Label = ({ children, htmlFor, className = '', ...props }) => {
  return (
    <label htmlFor={htmlFor} className={`block font-medium mb-1 ${className}`} {...props}>
      {children}
    </label>
  );
};



export default FacultyAssignment;
