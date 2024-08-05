import FacultySidebar from "@/components/common/Nav/FacultySidebar";
import FformReportComponents from "@/components/forms/FformReport.component";
import React from "react";

const FformReport = () => {
  return (
    <div className="flex gap-4 ">
      <FacultySidebar />
      <FformReportComponents />
    </div>
  );
};

export default FformReport;
