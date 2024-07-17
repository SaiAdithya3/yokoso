import React from 'react';
import StudentSidebar from '@/components/common/Nav/StudentSidebar';
import Avatar from 'boring-avatars';

const StudentDashboard = () => {
  return (
    <div className="flex gap-4 min-h-screen bg-gray-100">
      <StudentSidebar />
      <div className="flex flex-col w-full p-6 space-y-6">
        {/* Dashboard Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome Student</h1>
          <div className="flex space-x-4 popp">
            <button className="bg-zinc-900 text-white px-4 py-2 rounded-lg">Notifications</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Logout</button>
          </div>
        </div>

        {/* Overview Section */}
        <div className="flex gap-6">


          <div className="bg-white border w-1/3 border-zinc-50 shadow rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <button className="bg-zinc-700 text-white px-3 py-1 rounded-lg">View</button>
            </div>

            <div className="flex justify-around">
              <div className="flex flex-col gap-2">
                <Avatar size={100} name="John Doe" variant="beam" />
                <p className="text-gray-800">ID: 21A48R546</p>
              </div>
              <div className="flex-col flex gap-1 ">
                <p className="text-gray-800 flex justify-between"><b> Name :</b> John Doe</p>
                <p className="text-gray-800 flex justify-between"><b>Course :</b> B.Tech CSE</p>
                <p className="text-gray-800 flex justify-between"><b> Year : </b> 3rd</p>
                <p className="text-gray-800 flex justify-between"><b>Section: </b> A</p>
                <p className="text-gray-800 flex justify-between"><b>Email : </b> bankai@email.com</p>
              </div>
            </div>
          </div>


          {/* <div className="bg-white  border border-zinc-50 shadow rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Recent Assignments</h2>
            <ul className="list-disc list-inside">
              <li>Assignment 1: Data Structures - Due: 20th July</li>
              <li>Assignment 2: Operating Systems - Due: 25th July</li>
            </ul>
          </div>


          <div className="bg-white  border border-zinc-50 shadow rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Exams</h2>
            <ul className="list-disc list-inside">
              <li>Mid-Semester Exam: Data Structures - 30th July</li>
              <li>Mid-Semester Exam: Operating Systems - 2nd August</li>
            </ul>
          </div> */}
          <div className="w-3/4 bg-white border border-zinc-50 shadow rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Recent Assignments</h2>
          </div>
        </div>

        {/* Attendance and Grades Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div className="bg-white border border-zinc-50 shadow rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Attendance</h2>
            <p className="text-gray-700">Total Classes Attended: 85%</p>
          </div>


          <div className="bg-white border border-zinc-50 shadow rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-4">Grades</h2>
            <p className="text-gray-700">GPA: 8.5</p>
          </div>

        </div>

        {/* Quick Links Section */}
        <div className="bg-white border border-zinc-50 shadow rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <a href="#" className="bg-blue-500 text-white text-center py-4 rounded-md">LMS</a>
            <a href="#" className="bg-green-500 text-white text-center py-4 rounded-md">Finance</a>
            <a href="#" className="bg-purple-500 text-white text-center py-4 rounded-md">Hostel</a>
            <a href="#" className="bg-yellow-500 text-white text-center py-4 rounded-md">Exams</a>
            <a href="#" className="bg-red-500 text-white text-center py-4 rounded-md">Assignments</a>
            <a href="#" className="bg-indigo-500 text-white text-center py-4 rounded-md">Attendance</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDashboard;
