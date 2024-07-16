import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Auth/Login';

const App = () => {
  return (
    <>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/t/dashboard" element={<Dashboard />} />
          <Route path="/a/dashboard" element={<Dashboard />} />
          <Route path="/s/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  )
}

export default App