import React, { useState } from 'react';
import StudentSidebar from '@/components/common/Nav/StudentSidebar';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';

const RMS = () => {
    const [requests, setRequests] = useState([
        {
            id: 1,
            type: 'Complaint',
            name: 'John Doe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: 'Opened',
            date: '01/01/2022',
        },
        {
            id: 2,
            type: 'Request',
            name: 'Jane Doe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: 'Opened',
            date: '01/01/2022',
        },
        {
            id: 3,
            type: 'Grievance',
            name: 'John Doe',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: 'Closed',
            date: '01/01/2022',
        }
    ]);
    const [showModal, setShowModal] = useState(false);
    const [newRequest, setNewRequest] = useState({
        type: 'Complaint',
        name: '',
        description: '',
    });

    const logRequest = () => {
        const id = requests.length + 1;
        const date = new Date().toLocaleDateString();
        const status = 'Opened';
        const request = { ...newRequest, id, date, status };

        setRequests([...requests, request]);
        setShowModal(false);
        setNewRequest({
            type: 'Complaint',
            name: '',
            description: '',
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRequest({ ...newRequest, [name]: value });
    };

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <div className="flex gap-4">
            <StudentSidebar />

            <div className="w-full p-4">
                <Breadcrumb className="hidden md:flex px-2 pb-2">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to={-1}>Dashboard</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>RMS</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="flex justify-between items-center mb-6 px-2 py-2 pb-4 border-b">
                    <h1 className="text-3xl font-semibold">Relationship Management System</h1>
                    <button onClick={toggleModal} className="px-4 py-2 bg-zinc-900 text-white rounded-lg shadow hover:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Log New Request</button>
                </div>

                {/* Modal for logging new request */}
                {showModal && (
                    <Modal onClose={toggleModal}>
                        <div className="p-4 space-y-3">
                            <h2 className="text-2xl font-semibold mb-4">Log New Request</h2>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="type" className="text-sm font-medium">Type:</label>
                                <select
                                    id="type"
                                    name="type"
                                    value={newRequest.type}
                                    onChange={handleInputChange}
                                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >
                                    <option value="Complaint">Complaint</option>
                                    <option value="Request">Request</option>
                                    <option value="Grievance">Grievance</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={newRequest.name}
                                    onChange={handleInputChange}
                                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex flex-col space-y-2">
                                <label htmlFor="description" className="text-sm font-medium">Description:</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={newRequest.description}
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                />
                            </div>
                            <div className="flex justify-end mt-4">
                                <Button onClick={logRequest}>Log Request</Button>
                            </div>
                        </div>
                    </Modal>
                )}

                {/* Table to display logged requests */}
                <div className="overflow-auto bg-white shadow rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-zinc-900">
                            <tr>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-100 uppercase tracking-wider">ID</th>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-100 uppercase tracking-wider">Type</th>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-100 uppercase tracking-wider">Name</th>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-100 uppercase tracking-wider">Description</th>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-100 uppercase tracking-wider">Status</th>
                                <th className="py-3 px-4 text-left text-sm font-medium text-gray-100 uppercase tracking-wider">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {requests.map(request => (
                                <tr key={request.id} className="hover:bg-gray-100">
                                    <td className="py-3 px-4">{request.id}</td>
                                    <td className="py-3 px-4">{request.type}</td>
                                    <td className="py-3 px-4">{request.name}</td>
                                    <td className="py-3 px-4">{request.description}</td>
                                    <td className={`py-3 popp font-semibold px-4 ${request.status === 'Opened' ? 'text-red-500' : 'text-green-500'}`}>{request.status}</td>
                                    <td className="py-3 px-4">{request.date}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const Modal = ({ children, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded-lg p-4 w-full max-w-md">
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h3 className="text-lg font-semibold">Log New Request</h3>
                    <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M13.293 6.293a1 1 0 0 0-1.414 1.414L14.586 11l-2.707 2.293a1 1 0 1 0 1.414 1.414L16 12.414l2.293 2.293a1 1 0 0 0 1.414-1.414L17.414 11l2.293-2.293a1 1 0 0 0-1.414-1.414L16 9.586l-2.293-2.293z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default RMS;
