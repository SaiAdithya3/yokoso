import React from "react";
import Navbar from "./Admin/Navbar";
import Dashboard from "./Admin/Dashboard";
const AdminPage = () => {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <div>
            <Dashboard />
        </div>
      </div>
    </>
  );
};

export default AdminPage;
