import AdminSidebar from "@/components/common/Nav/AdminSidebar"; 
import AdminPage from "@/components/Library/AdminPage"; // admin page for library
import React from "react";

const AdLibrary = () => {
  return (
    <>
      <div className="flex gap-4">
        <AdminSidebar />
        <div className="flex p-8 w-full">
          <AdminPage />
        </div>
      </div>
    </>
  );
};

export default AdLibrary;
