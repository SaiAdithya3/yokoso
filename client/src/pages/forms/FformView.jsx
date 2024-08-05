import FacultySidebar from "@/components/common/Nav/FacultySidebar";
import FformViewComponents from "@/components/forms/FformView.component";
import React from "react";

const FformView = () => {
  return (
    <div className="flex gap-4 ">
      <FacultySidebar />
      <FformViewComponents />
    </div>
  );
};

export default FformView;
