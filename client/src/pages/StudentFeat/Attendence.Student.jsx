/**
 * v0 by Vercel.
 * @see https://v0.dev/t/86AJO5dHv04
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    BreadcrumbPage,
  } from "@/components/ui/breadcrumb";
  import { Link } from "react-router-dom";
  import { Button } from "@/components/ui/button";
  
  import { useLocation } from "react-router-dom";
  import { useState } from "react";
  import SubjectWise from "@/components/StudentDash/Attendence/SubjectWise.Attendence";
  import AbsentLog from "@/components/StudentDash/Attendence/AbsentLog.Attendence";
  import Present from "@/components/StudentDash/Attendence/Present.Attendence";
  import OverAll from "@/components/StudentDash/Attendence/OverAll.Attendence";
  import SemesterDropdown from './SemesterDropdown'; // Update path as needed
  
  export default function Student() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("SubjectWise");
    const [selectedSemester, setSelectedSemester] = useState("Semester 1"); // Define selectedSemester state
    const renderContent = () => {
      switch (activeTab) {
        case "SubjectWise":
          return <SubjectWise />;
        case "AbsentLog":
          return <AbsentLog />;
        case "Present":
          return <Present />;
        case "OverAll":
          return <OverAll />;
        default:
          return <div>pls check you page</div>;
      }
    };
    const [showResults, setShowResults] = useState(true); // Example state for results visibility
  
    const handleSemesterSelect = (semester) => {
      setSelectedSemester(semester); // Update selected semester
      setShowResults(true); // Reset other states or logic as needed
    };
    return (
      <>
        <div className="flex flex-col w-full min-h-screen bg-muted/40">
          <div className="border-b mt-8 flex  flex-col gap-5">
            <div className=" flex  w-full justify-between px-4">
  
              <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to={-1}>Dashboard</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Attendance</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              <div className=" px-4">
                <SemesterDropdown // Render SemesterDropdown
                  selectedSemester={selectedSemester}
                  onSelectSemester={handleSemesterSelect} // Pass handleSemesterSelect as callback
                />
              </div>
            </div>
  
            <div className="flex px-3 justify-between w-fit gap-14 mt-4">
              <button
                className={`flex-col flex gap-2 ${
                  activeTab === "SubjectWise" ? "text-black" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("SubjectWise")}
              >
                SubjectWise
                {activeTab === "SubjectWise" && (
                  <div className="bg-black/70 rounded-2xl w-full h-1" />
                )}
              </button>
              <button
                className={`flex-col flex gap-2 ${
                  activeTab === "Present" ? "text-black" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("Present")}
              >
                Present
                {activeTab === "Present" && (
                  <div className="bg-black/70 rounded-2xl w-full h-1" />
                )}
              </button>
  
              <button
                className={`flex-col flex gap-2 ${
                  activeTab === "AbsentLog" ? "text-black" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("AbsentLog")}
              >
                AbsentLog
                {activeTab === "AbsentLog" && (
                  <div className="bg-black/70 rounded-2xl w-full h-1" />
                )}
              </button>
              <button
                className={`flex-col flex gap-2 ${
                  activeTab === "OverAll" ? "text-black" : "text-gray-500"
                }`}
                onClick={() => setActiveTab("OverAll")}
              >
                OverAll
                {activeTab === "OverAll" && (
                  <div className="bg-black/70 rounded-2xl w-full h-1" />
                )}
              </button>
            </div>
          </div>
          <div className="mt-5">{renderContent()}</div>
        </div>
      </>
    );
  }
  
  function CalendarIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    );
  }
  
  function TypeIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="4 7 4 4 20 4 20 7" />
        <line x1="9" x2="15" y1="20" y2="20" />
        <line x1="12" x2="12" y1="4" y2="20" />
      </svg>
    );
  }
  
  function XIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    );
  }
  