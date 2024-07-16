import React from 'react'
import { useState } from 'react'
import ClassTime from './TimeTable.ClassTime'


const Schedule = () => {
    
  const [activeTab, setActiveTab] = useState("TimeTable");
    const renderContent = () => {
        switch (activeTab) {
          case "TimeTable":
            return <ClassTime />;
          case "TimeTable":
            return <ClassTime />;
          case "TimeTable":
            return <ClassTime />;
          default:
            return <ClassTime />;
        }
      };
  return (
    <>
      <div className="border-b mt-8">
              <div className="flex px-3 justify-between">
              <button
                  className={`flex-col flex gap-2 ${activeTab === "CVResume" ? "text-black" : "text-gray-500"}`}
                  onClick={() => setActiveTab("TimeTable")}
                >
                    Time Table
                  {activeTab === "TimeTable" && (
                    <div className="bg-black/70 rounded-2xl w-full h-1" />
                  )}
                </button>
                <button
                  className={`flex-col flex gap-2 ${activeTab === "ApplicationDetails" ? "text-black" : "text-gray-500"}`}
                  onClick={() => setActiveTab("ApplicationDetails")}
                >
                  Application Details
                  {activeTab === "ApplicationDetails" && (
                    <div className="bg-black/70 rounded-2xl w-full h-1" />
                  )}
                </button>
             
                <button
                  className={`flex-col flex gap-2 ${activeTab === "Tests" ? "text-black" : "text-gray-500"}`}
                  onClick={() => setActiveTab("Tests")}
                >
                  Test Results
                  {activeTab === "Tests" && (
                    <div className="bg-black/70 rounded-2xl w-full h-1" />
                  )}
                </button>
             
              </div>
            </div>

            <div className="mt-5">
              {renderContent()}
            </div>
    </>
  )
}

export default Schedule