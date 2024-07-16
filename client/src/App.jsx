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

const App = () => {
  return (
    <>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/a/dashboard" element={<AdminDashboard />} />
          <Route path="/f/dashboard" element={<FacultyDashboard />} />
          <Route path="/s/dashboard" element={<StudentDashboard />} />
          <Route path="/f/students" element={<FStudents />} />
          <Route path="/f/profile" element={<FacultyProfile />} />
          <Route path="/s/profile" element={<StudentProfile />} />
          <Route path="/a/profile" element={<AdminProfile />} />
        </Routes>
      </div>
    </>
  )
}

export default App