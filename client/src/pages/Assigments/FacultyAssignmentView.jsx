import React, { useState } from 'react';
import FacultySidebar from '@/components/common/Nav/FacultySidebar';
import { Button } from '@/components/ui/button';
import { Table } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from 'recharts';
import { CiTimer } from "react-icons/ci";
import { MdPendingActions } from "react-icons/md";



const FacultyAssignmentView = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const assignmentDetails = {
        name: 'Assignment 1',
        uploadDate: '2024-07-10',
        lastDate: '2024-07-20',
        section: 'A',
        totalSubmissions: 18,
        totalStudents: 25,
    };

    const students = [
        { id: 1, rollNumber: '001', name: 'John Doe', submitted: true, submissionTime: '2024-07-15 14:00' },
        { id: 2, rollNumber: '002', name: 'Jane Smith', submitted: false },
        { id: 3, rollNumber: '003', name: 'Mike Johnson', submitted: true, submissionTime: '2024-07-16 10:00' },
        // Add more students as needed
    ];

    const handleViewSubmission = (student) => {
        setSelectedStudent(student);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedStudent(null);
    };

    const data = [
        { name: 'Submitted', value: assignmentDetails.totalSubmissions },
        { name: 'Not Submitted', value: assignmentDetails.totalStudents - assignmentDetails.totalSubmissions },
    ];

    return (
        <div className="flex gap-4 min-h-screen bg-gray-50">
            <FacultySidebar />
            <div className="flex flex-col p-4 w-full">
                <div className="flex justify-between items-center p-3 border-b border-black/30 mb-6">
                    <h1 className="text-3xl font-">Assignment Details - {assignmentDetails.name}</h1>
                </div>
                <div className="flex gap-4 mb-6">
                    <div className="w-1/3 flex flex-col bg-white rounded-xl shadow border p-4">
                        <h1 className="text-xl font-semibold mb-2">{assignmentDetails.name}</h1>
                        <div className='flex flex-col gap-2'>
                            <div className="flex justify-between">
                                <span className="font-bold">Upload Date:</span>
                                <span>{assignmentDetails.uploadDate}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold">Last Date:</span>
                                <span>{assignmentDetails.lastDate}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold">Section:</span>
                                <span>{assignmentDetails.section}</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold">Total Marks:</span>
                                <span>100</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="font-bold">Instructions:</span>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et felis. Lorem ipsum dolor sit. Lorem, ipsum.</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 bg-white rounded-xl flex flex-col shadow border p-4">
                        <h1 className="text-xl font-semibold mb-2">Overview</h1>
                        <div className="space-y-3 items-center h-full justify-center gap-2">
                            <div className="bg-zinc-50 border p-4 rounded-lg">
                                <span className="font-medium">Total Students:</span>
                                <span className="text-2xl font-bold ml-2">{assignmentDetails.totalStudents}</span>
                            </div>
                            <div className="flex items-center gap-6 bg-green-200/80 border-green-400 border px-4 py-2 rounded-lg">
                                <CiTimer className="text-5xl bg-green-400 text-green-800 border border-green-500 rounded-full p-2 " />
                                <div className="flex items-center gap-4">
                                    <span className="font-semibold text-md">Submitted:</span>
                                    <span className="text-2xl font-bold">{assignmentDetails.totalSubmissions}</span>
                                </div>
                            </div>
                            <div className="flex  items-center gap-6 bg-red-200 border border-red-400 px-4 py-2 rounded-lg">
                                <MdPendingActions className="text-5xl text-red-800 border-red-400 border bg-red-400 rounded-full p-3 " />
                                <div className="flex items-center gap-4">
                                    <span className="font-semibold text-md">Not Submitted:</span>
                                    <span className="text-2xl font-bold">{assignmentDetails.totalStudents - assignmentDetails.totalSubmissions}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-1/3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Submission Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <BarChart width={400} height={200} data={data}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#8884d8" />
                                </BarChart>
                            </CardContent>
                        </Card>
                    </div>
                </div>
                <div className="flex justify-between items-center px-12 mb-4">
                    <Input placeholder="Search by name or roll number" className="w-1/3" />
                    <div className="flex space-x-2">
                        <Button variant="outline">Sort</Button>
                        <Button variant="outline">Filter</Button>
                        <Button variant="outline" >Export</Button>
                    </div>
                </div>
                <div className="overflow-auto bg-white shadow rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Roll Number</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Submission Time</th>
                                <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {students.map((student) => (
                                <tr key={student.id}>
                                    <td className="py-3 px-6">{student.rollNumber}</td>
                                    <td className="py-3 px-6">{student.name}</td>
                                    <td className="py-3 px-6">
                                        {student.submitted ? <Badge variant="success">Submitted</Badge> : <Badge variant="danger">Not Submitted</Badge>}
                                    </td>
                                    <td className="py-3 px-6">{student.submitted ? student.submissionTime : 'N/A'}</td>
                                    <td className="py-3 px-6">
                                        {student.submitted && <Button onClick={() => handleViewSubmission(student)}>View</Button>}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {isModalOpen && selectedStudent && (
                <Modal onClose={handleCloseModal}>
                    <div className="p-4">
                        <h2 className="text-2xl mb-4">Submission by {selectedStudent.name}</h2>
                        <p><strong>Roll Number:</strong> {selectedStudent.rollNumber}</p>
                        <p><strong>Submission Time:</strong> {selectedStudent.submissionTime}</p>
                        <div className="flex justify-end mt-4">
                            <Button onClick={handleCloseModal} variant="outline" className="mr-2">Close</Button>
                            <Button>Download Submission</Button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
};

const Modal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
                <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default FacultyAssignmentView;
