import FacultySidebar from "@/components/common/Nav/FacultySidebar";
import FformbuilderComponents from "@/components/forms/Fformbuilder.component";
import React from "react";

const Fformbuilder = () => {
  return (
    <div className="flex gap-4 ">
      <FacultySidebar />
      <FformbuilderComponents />
    </div>
  );
};

export default Fformbuilder;
