import FacultySidebar from "@/components/common/Nav/FacultySidebar";
import ListStudents from "@/components/f-Students/ListStudents";
import React from "react";

const FStudents = () => {
  return (
    <>
     <div className="flex gap-4">
     <FacultySidebar />
     <ListStudents />
     </div>
    </>
  );
};

export default FStudents;
