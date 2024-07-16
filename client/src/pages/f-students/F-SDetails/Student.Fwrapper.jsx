import FacultySidebar from "@/components/common/Nav/FacultySidebar";
import React from "react";
import Fdetails from "@/pages/f-students/F-SDetails/Student.Fdetails";

const Fwrapper = () => {
  return (
    <div className=" flex gap-4">
      <FacultySidebar />
      <Fdetails />
    </div>
  );
};

export default Fwrapper;
