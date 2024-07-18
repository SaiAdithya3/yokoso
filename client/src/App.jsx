import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Auth/Login';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import FacultyDashboard from './pages/Dashboard/FacultyDashboard';
import StudentDashboard from './pages/Dashboard/StudentDashboard';
import FStudents from './pages/f-students/FStudents';
import StudentProfile from './pages/Profile/StudentProfile';
import FacultyProfile from './pages/Profile/FacultyProfile';
import AdminProfile from './pages/Profile/AdminProfile';
import Fwrapper from './pages/f-students/F-SDetails/Student.Fwrapper';
import ResultsPage from './pages/StudentFeat/ResultsPage';
import FacultyAssignment from './pages/Assigments/FacultyAssignment';
import StudentAssignment from './pages/Assigments/StudentAssignment';
import FacultyAssignmentView from './pages/Assigments/FacultyAssignmentView';

const App = () => {
  return (
    <>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* dashboard pages */}
          <Route path="/a/dashboard" element={<AdminDashboard />} />
          <Route path="/f/dashboard" element={<FacultyDashboard />} />
          <Route path="/s/dashboard" element={<StudentDashboard />} />

          {/* common feat For Attendence*/}
          <Route path="/f/dashboard/attendance/:sectionName" element={<FacultyDashboard gotoAttendence={true} />} />

          {/* faculty feat */}
          <Route path="/f/students" element={<FStudents />} />
          <Route path='/f/students/:id' element={<Fwrapper />} />
          <Route path="/f/assignments" element={<FacultyAssignment />} />
          <Route path="/f/assignments/:id" element={<FacultyAssignmentView />} />

          {/* student feat */}
          <Route path="/s/results" element={<ResultsPage />} />
          <Route path="/s/assignments" element={<StudentAssignment />} />

          {/* profile pages */}
          <Route path="/f/profile" element={<FacultyProfile />} />
          <Route path="/s/profile" element={<StudentProfile />} />
          <Route path="/a/profile" element={<AdminProfile />} />
        </Routes>
      </div>
    </>
  )
}

export default App