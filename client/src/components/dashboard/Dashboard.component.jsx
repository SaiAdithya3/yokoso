import React from "react";
import Nav from "../common/Nav/Nav";
import Sidebar from "../dashboard/components/Sidebar";
import CardPage from "./components/CardPage";
import FacultySidebar from "../common/Nav/FacultySidebar";
import Fattendence from "@/pages/f-students/Attendence/Student.Fattendence";

const Dashboard = ({ gotoAttendence }) => {
  return (
    <div className=" flex  gap-4">
      <FacultySidebar />
      {gotoAttendence ? <Fattendence/> : <CardPage />}
    </div>
  );
};

export default Dashboard;
