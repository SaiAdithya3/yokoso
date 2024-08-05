import FacultySidebar from "@/components/common/Nav/FacultySidebar";
import FformsComponents from "@/components/forms/Fforms.component";
import React from "react";

const Fforms = () => {
  return (
    <div className="flex gap-4 ">
      <FacultySidebar />
      <FformsComponents />
    </div>
  );
};

export default Fforms;
