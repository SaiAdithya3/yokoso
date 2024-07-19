import AdminSidebar from "@/components/common/Nav/AdminSidebar"; 
import FacultySidebar from "@/components/common/Nav/FacultySidebar";
import AdminPage from "@/components/Library/AdminPage"; // admin page for library
import React from "react";

const AdLibrary = ({bankai}) => {

  return (
    <>
      <div className="flex gap-4">
      {bankai ?  <FacultySidebar /> :  <AdminSidebar />}
        <div className="flex p-8 w-full">
          <AdminPage />
        </div>
      </div>
    </>
  );
};

export default AdLibrary;
