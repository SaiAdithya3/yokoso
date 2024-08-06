import React from 'react';
import { Button } from '../../components/ui/button'; // Import Shadcn Button component
import Avatar from 'boring-avatars';

// Authority data with Indian names and avatars
const authorities = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    designation: 'Principal',
    email: 'principal@example.com',
    phone: '+911234567890',
    hasAppointment: true,
  },
  {
    id: 2,
    name: 'Prof. Anjali Patel',
    designation: 'HOD',
    email: 'hod@example.com',
    phone: '+919876543210',
    hasAppointment: false,
  },
  {
    id: 3,
    name: 'Dr. Sunil Sharma',
    designation: 'Mentor',
    email: 'mentor@example.com',
    phone: '+911122334455',
    hasAppointment: false,
  },
  {
    id: 4,
    name: 'Ms. Priya Singh',
    designation: 'Chancellor',
    email: 'chancellor@example.com',
    phone: '+922233445566',
    hasAppointment: false,
  },
  {
    id: 5,
    name: 'Mr. Arjun Rao',
    designation: 'Division of Student Relationship',
    email: 'student.relation@example.com',
    phone: '+933344556677',
    hasAppointment: false,
  },
  {
    id: 6,
    name: 'Ms. Neha Kapoor',
    designation: 'Industry Mentor',
    email: 'industry.mentor@example.com',
    phone: '+944455667788',
    hasAppointment: true,
  },
];

const Authorities = () => {
  return (
    <div className="p-6 w-full mx-auto">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-900">Know Your Authorities</h1>
      <div className="overflow-x-hidden">
        <div className="flex flex-wrap justify-center gap-6 py-4">
          {authorities.map((authority) => (
            <div key={authority.id} className="w-full sm:w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-6 flex-none flex flex-col items-center">
              <Avatar 
                name={authority.name} 
                variant="beam" 
                size="100px" 
                className="w-24 h-24 mb-4 border-4 border-gray-200 rounded-full"
              />
              <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">{authority.name}</h2>
              <p className="text-md text-center text-gray-600 mb-2">{authority.designation}</p>
              <div className="text-center mb-4">
                <p className="text-sm text-gray-500">{authority.email}</p>
                <p className="text-sm text-gray-500">{authority.phone}</p>
              </div>
              {authority.hasAppointment && (
                <div className="text-center">
                  <Button
                    onClick={() => alert('Booking appointment with ' + authority.name)}
                    className="text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-700 transition-colors duration-300"
                  >
                    Book an Appointment
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Authorities;
