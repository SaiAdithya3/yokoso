import React, { useState } from 'react';
import StudentSidebar from '@/components/common/Nav/StudentSidebar';
import { Button } from '@/components/ui/button';

const StudentAssignment = () => {
    const [selectedAssignment, setSelectedAssignment] = useState(null);
    const [view, setView] = useState('upcoming');

    const assignments = [
        {
            id: 1,
            name: 'Assignment 1',
            description: 'This is the first assignment.',
            deadline: '2024-07-20',
            downloadLink: '/path/to/assignment1.pdf',
            course: 'CSE101',
            lecturer: 'Dr. John Doe',
            uploadDate: '2024-07-10',
            type: 'Individual',
            marks: 100,
            status: 'upcoming',
        },
        {
            id: 2,
            name: 'Assignment 1',
            description: 'This is the first assignment.',
            deadline: '2024-07-20',
            downloadLink: '/path/to/assignment1.pdf',
            course: 'CSE101',
            lecturer: 'Dr. John Doe',
            uploadDate: '2024-07-10',
            type: 'Individual',
            marks: 100,
            status: 'upcoming',
        },
        {
            id: 3,
            name: 'Assignment 1',
            description: 'This is the first assignment.',
            deadline: '2024-07-20',
            downloadLink: '/path/to/assignment1.pdf',
            course: 'CSE101',
            lecturer: 'Dr. John Doe',
            uploadDate: '2024-07-10',
            type: 'Individual',
            marks: 100,
            status: 'upcoming',
        },
        {
            id: 2,
            name: 'Assignment 2',
            description: 'This is the second assignment.',
            deadline: '2024-08-15',
            downloadLink: '/path/to/assignment2.pdf',
            course: 'MEC102',
            lecturer: 'Prof. Jane Smith',
            uploadDate: '2024-08-01',
            type: 'Group',
            marks: 50,
            status: 'completed',
        },
        // Add more assignments as needed
    ];

    const handleAssignmentClick = (assignment) => {
        setSelectedAssignment(assignment);
    };

    const handleCloseModal = () => {
        setSelectedAssignment(null);
    };

    const showUpcomingAssignments = () => {
        setView('upcoming');
    };

    const showCompletedAssignments = () => {
        setView('completed');
    };

    const filteredAssignments = assignments.filter(assignment => assignment.status === view);

    return (
        <div className="flex gap-4 min-h-screen bg-gray-50">
            <StudentSidebar />
            <div className="flex flex-col p-4 w-full px-8">
                <div className="flex justify-between items-center mb-6 border-b p-4">
                    <h1 className="text-3xl font-semibold">My Assignments</h1>
                    <div className="space-x-4">
                      <button onClick={showUpcomingAssignments} className={`px-4 py-2 rounded-lg ${view === 'upcoming' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'}`}>Upcoming</button>
                      <button onClick={showCompletedAssignments} className={`px-4 py-2 rounded-lg ${view === 'completed' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'}`}>Completed</button>
                    </div>
                </div>
                <h1 className="text-2xl font-semibold mb-4">{view} Assignments</h1>
                <div className="overflow-auto bg-white shadow rounded-lg mb-6">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-zinc-900">
                            <tr>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-100 uppercase tracking-wider">Course ID</th>
                                <th className="py-3 px-6 text-left text-sm font-medium text-gray-100 uppercase tracking-wider">Assignment Name</th>
                                <th className="py-3 px-6 text-left text-sm font-medium text-gray-100 uppercase tracking-wider">Course</th>
                                <th className="py-3 px-6 text-left text-sm font-medium text-gray-100 uppercase tracking-wider">Deadline</th>
                                <th className="py-3 px-6 text-left text-sm font-medium text-gray-100 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredAssignments.map((assignment) => (
                                <tr key={assignment.id} onClick={() => handleAssignmentClick(assignment)} className="cursor-pointer hover:bg-gray-100">
                                    <td className="py-3 px-4">{assignment.id}</td>
                                    <td className="py-3 px-6">{assignment.name}</td>
                                    <td className="py-3 px-6">{assignment.course}</td>
                                    <td className="py-3 px-6">{assignment.deadline}</td>
                                    <td className="py-3 px-6">
                                        <Button variant="outline">View Details</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {selectedAssignment && (
                    <Modal onClose={handleCloseModal}>
                        <div className="p-4 space-y-3">
                            <h2 className="text-2xl font-semibold border rounded-lg px-4 py-1 text-center bg-zinc-50 mb-4">Assignment Details</h2>
                            <p className='flex justify-between'><strong>Assignment Name:</strong> {selectedAssignment.name}</p>
                            <p className='flex justify-between'><strong>Description:</strong> {selectedAssignment.description}</p>
                            <p className='flex justify-between'><strong>Course:</strong> {selectedAssignment.course}</p>
                            <p className='flex justify-between'><strong>Lecturer:</strong> {selectedAssignment.lecturer}</p>
                            <p className='flex justify-between'><strong>Deadline:</strong> {selectedAssignment.deadline}</p>
                            <p className='flex justify-between'><strong>Uploaded Date:</strong> {selectedAssignment.uploadDate}</p>
                            <p className='flex justify-between'><strong>Type:</strong> {selectedAssignment.type}</p>
                            <p className='flex justify-between'><strong>Marks:</strong> {selectedAssignment.marks}</p>
                            <div className="flex gap-4 p-2 border-t pt-8 items-center justify-around mt-4">
                                <Button onClick={() => window.location.href = selectedAssignment.downloadLink}>Download Assignment</Button>
                                <Button>Upload Assignment</Button>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        </div>
    );
};

const Modal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
                <button className="absolute text-3xl top-5 right-5 text-gray-500 hover:text-gray-700" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default StudentAssignment;
