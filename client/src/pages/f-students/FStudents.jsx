import React, { useState } from "react";
import FacultySidebar from "@/components/common/Nav/FacultySidebar";
import ListStudents from "@/components/f-Students/ListStudents";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Link } from 'react-router-dom';
const FStudents = () => {
  const [selectedSection, setSelectedSection] = useState(1);

  const sections = [
    { id: 1, title: "Section 1", description: "Description of Section 1" },
    { id: 2, title: "Section 2", description: "Description of Section 2" },
    { id: 3, title: "Section 3", description: "Description of Section 3" },
    { id: 4, title: "Section 4", description: "Description of Section 4" },
    { id : 5 , title : "My Mentees" , description : "Mentees of the faculty" }
  ];

  const handleSectionClick = (id) => {
    setSelectedSection(id === selectedSection ? null : id);
  };

  return (
    <>
      <div className="flex gap-4 bg-slate-100">
        <FacultySidebar />
        <div className="flex w-full flex-col items-start bg-slate-100 gap-2">
          <div className="w-full flex bg-slate-100/40 backdrop-blur-sm border-b border-black/30 flex-col gap-2 sticky p-4 z-50 top-0">
            <Breadcrumb className="hidden md:flex px-2 pb-2 popp font">
              <BreadcrumbList >
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={-1}>Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Student   </BreadcrumbPage>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage> Section{selectedSection}  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-2xl px-2 font-semibold">Students of Section {selectedSection}</h1>
          </div>
          <div className="flex w-full items-start gap-4">
            <div className="w-1/4 flex flex-col sticky top-24 p-4 justify-center gap-4 items-center">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className={`cursor-pointer p-4 border border-gray-300 rounded-lg ${selectedSection === section.id ? "bg-indigo-200 border-2 border-indigo-700/40 " : ""
                    }`}
                  onClick={() => handleSectionClick(section.id)}
                >
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <p className="text-sm text-gray-600">{section.description}</p>
                </div>
              ))}
            </div>
            <div className="w-full">
              {selectedSection && <ListStudents sectionId={selectedSection} />}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default FStudents;
