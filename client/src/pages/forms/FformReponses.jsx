import FacultySidebar from "@/components/common/Nav/FacultySidebar";
import FformResponsesComponents from "@/components/forms/FformResponses.component";
import React from "react";

const FformResponses = () => {
  return (
    <div className="flex gap-4 ">
      <FacultySidebar />
      <FformResponsesComponents />
    </div>
  );
};

export default FformResponses;
