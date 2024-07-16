import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Auth/Login';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import FacultyDashboard from './pages/Dashboard/FacultyDashboard';
import StudentDashboard from './pages/Dashboard/StudentDashboard';

const App = () => {
  return (
    <>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/a/dashboard" element={<AdminDashboard />} />
          <Route path="/s/dashboard" element={<FacultyDashboard />} />
          <Route path="/f/dashboard" element={<StudentDashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App