import StudentSidebar from "@/components/common/Nav/StudentSidebar";
import StudentFmsComponent from "@/components/fms/StudentFms.Component";
import StudentResidentialComponent from "@/components/residential/StudentResidentialComponent";
import React from "react";

const StudentRes = () => {
  return (
    <div className="flex gap-4 min-h-screen">
      <StudentSidebar />
      <div className="flex flex-col w-full p-6 space-y-6">
        <StudentResidentialComponent />
      </div>
    </div>
  );
};

export default StudentRes;
