import React from 'react';
import { Button } from '@/components/ui/button';
import { Home, Bed, Utensils,  } from 'lucide-react';

const StudentResidentialComponent = () => {
  const studentResidentialDetails = {
    hostelName: 'Boys Hostel-03',
    roomType: 'Std Non-AC 4 Seater',
    roomNo: 'B723-Bed C',
    availingFood: 'No',
    availingLaundry: 'No',
  };

  return (
    <div className="p-6 space-y-6">
      {/* <nav className="flex space-x-4 mb-6">
        <a href="#dashboard" className="text-blue-600">Dashboard</a>
        <a href="#home" className="text-blue-600">Home</a>
        <a href="#logout" className="text-blue-600">Logout</a>
        <a href="#idea-hub" className="text-blue-600">Idea Hub</a>
      </nav> */}

      <section className="border-b pb-4 mb-4">
        <h2 className="text-xl font-semibold mb-4">Residential Details</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p><strong>Hostel Name:</strong> {studentResidentialDetails.hostelName}</p>
            <p><strong>Room Type:</strong> {studentResidentialDetails.roomType}</p>
            <p><strong>Room No.:</strong> {studentResidentialDetails.roomNo}</p>
            <p><strong>Availing Food:</strong> {studentResidentialDetails.availingFood}</p>
            <p><strong>Availing Laundry:</strong> {studentResidentialDetails.availingLaundry}</p>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="border rounded-lg p-4 bg-gray-50 shadow-sm">
          <Home className="w-6 h-6 mb-2" />
          <h3 className="text-lg font-medium mb-2">Hostel Booking</h3>
          <p className="mb-4">Book your hostel room easily through the online portal.</p>
          <Button className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            Book Now
          </Button>
        </div>
        
        <div className="border rounded-lg p-4 bg-gray-50 shadow-sm">
          {/* <ArrowsRightLeft className="w-6 h-6 mb-2" /> */}
          <h3 className="text-lg font-medium mb-2">Mutual Room Change</h3>
          <p className="mb-4">Request a room change with another student.</p>
          <Button className="flex items-center gap-2">
            {/* <ArrowsRightLeft className="w-4 h-4" /> */}
            Request Change
          </Button>
        </div>
        
        <div className="border rounded-lg p-4 bg-gray-50 shadow-sm">
          {/* <Laundry className="w-6 h-6 mb-2" /> */}
          <h3 className="text-lg font-medium mb-2">Laundry Management</h3>
          <p className="mb-4">Manage your laundry services and schedule pickups.</p>
          <Button className="flex items-center gap-2">
            {/* <Laundry className="w-4 h-4" /> */}
            Manage Laundry
          </Button>
        </div>
        
        <div className="border rounded-lg p-4 bg-gray-50 shadow-sm">
          {/* <Utensils className="w-6 h-6 mb-2" /> */}
          <h3 className="text-lg font-medium mb-2">Mess Management</h3>
          <p className="mb-4">Manage your mess services and view the menu.</p>
          <Button className="flex items-center gap-2">
            <Utensils className="w-4 h-4" />
            Manage Mess
          </Button>
        </div>
        
        <div className="border rounded-lg p-4 bg-gray-50 shadow-sm">
          {/* <Football className="w-6 h-6 mb-2" /> */}
          <h3 className="text-lg font-medium mb-2">Sports Management</h3>
          <p className="mb-4">View and manage your sports activities and facilities.</p>
          <Button className="flex items-center gap-2">
            {/* <Football className="w-4 h-4" /> */}
            Manage Sports
          </Button>
        </div>
      </section>
    </div>
  );
};

export default StudentResidentialComponent;
