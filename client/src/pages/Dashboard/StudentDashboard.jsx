import React from 'react';
import StudentSidebar from '@/components/common/Nav/StudentSidebar';
import Avatar from 'boring-avatars';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Student from '../StudentFeat/Attendence.Student';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { MdNotifications } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';
import { AlignHorizontalSpaceAroundIcon } from 'lucide-react';

const StudentDashboard = ({ gotoAttendence }) => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="flex gap-4 min-h-screen bg-slate-100">
      <StudentSidebar />
      {
        gotoAttendence ? (
          <Student />
        ) : (
          <div className="flex flex-col w-full p-6 space-y-6">
            {/* Dashboard Header */}
            <div className="flex justify-between items-center border-b pb-4">
              <Breadcrumb className="hidden popp md:flex px-2 pb-2">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={-1}>Dashboard</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Overview</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className="flex space-x-4 popp">
                <div className="flex gap-1 py-1  items-center rounded-lg px-2 bg-zinc-50 border-zinc-200 border">
                  <CiSearch className=" text-2xl text-slate-900" />
                  <input type="text" placeholder="Search students" className=" focus:outline-none  rounded-lg w-full  bg-zinc-50 border-black/40 popp py-1" />
                </div>
                <button className="bg-zinc-50 shadow text-black relative px-2 py-2 rounded-lg">
                  <span className="absolute text-xs -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full">2</span>
                  <MdNotifications className='text-2xl' />
                </button>
                <button className="bg-sky-600 shadow text-sky-50 relative px-2 py-2 rounded-lg">
                  <span className="absolute text-xs -top-2 -right-2 bg-red-500 text-white px-2 py-1 rounded-full">2</span>
                  <AlignHorizontalSpaceAroundIcon className='text-2xl' />
                </button>
              </div>
            </div>

            {/* Overview Section */}
            <div className="flex gap-6">


              <div className="w-1/3  rounded-2xl p-6">
                <h1 className='text-3xl font-bold py-2'>Hi, Sung Jun woo 👋 </h1>
                <h1 className='text-3xl font-semmibold'>Ready to Hunt some demons today ? </h1>
              </div>
              {/* <div className="bg-white border w-1/3 border-zinc-50 shadow rounded-2xl p-6">
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
      </div> */}


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
            {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

              <div className="bg-white flex w-full justify-between border border-zinc-50 shadow rounded-2xl p-6">
                <div className="    ">
                  <h2 className="text-2xl font-semibold mb-4">Attendance</h2>
                  <p className="text-gray-700">Total Classes Attended: 85%</p>
                </div>
                <Link to={`${pathname}/attendance`}>
                  <button className="bg-zinc-700 text-white px-3 py-2 rounded-lg h-fit">View Details</button>
                </Link>
              </div>


              <div className="bg-white border border-zinc-50 shadow rounded-2xl p-6">
                <h2 className="text-2xl font-semibold mb-4">Grades</h2>
                <p className="text-gray-700">GPA: 8.5</p>
              </div>

            </div> */}

            {/* Quick Links Section */}
            {/* <div className="bg-white border border-zinc-50 shadow rounded-2xl p-6">
              <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <a href="#" className="bg-blue-500 text-white text-center py-4 rounded-md">LMS</a>
                <a href="#" className="bg-green-500 text-white text-center py-4 rounded-md">Finance</a>
                <a href="#" className="bg-purple-500 text-white text-center py-4 rounded-md">Hostel</a>
                <a href="#" className="bg-yellow-500 text-white text-center py-4 rounded-md">Exams</a>
                <a href="#" className="bg-red-500 text-white text-center py-4 rounded-md">Assignments</a>
                <a href="#" className="bg-indigo-500 text-white text-center py-4 rounded-md">Attendance</a>
              </div>
            </div> */}
          </div>

        )
      }


    </div>
  )
}

export default StudentDashboard;
