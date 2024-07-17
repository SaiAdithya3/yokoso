import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Dropdown = ({ options, sectionId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const history = useNavigate();
  const location = useLocation();

  const handleOptionClick = (path) => {
    history(`${location.pathname}/${path}/${sectionId}`);
    setIsOpen(false);
  };

  return (
    <div className="relative text-xs w-[14rem] inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex text-xs justify-center w-full rounded-md 
          border border-gray-300 shadow-sm px-2 items-center
           py-1 bg-white  font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          Actions
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option.path)}
                className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                role="menuitem"
                tabIndex="-1"
                id={`menu-item-${index}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const SectionList = () => {
  const sections = [
    { name: "K21safFK", id: 1 },
    { name: "K21safJI", id: 2 },
    { name: "K21safLM", id: 3 },
    { name: "K21asfGP", id: 4 },
  ];

  const dropdownOptions = [
    { label: "Mark Attendance", path: "attendance" },
    { label: "View Section", path: "view" },
    { label: "More Options", path: "more" },
  ];

  return (
    <div className="border w-[22rem] rounded-2xl p-4">
      <div className="flex items-center justify-between border-b pb-2 mb-4">
        <h3 className="text-xl font-semibold text-gray-800">Your Sections</h3>
        <button className="border rounded-lg text-sm px-2 py-1 text-gray-600 hover:bg-gray-100 focus:outline-none">
          See All
        </button>
      </div>
      <div>
        {sections.slice(0, 5).map((section, index) => (
          <div
            key={index}
            className="flex gap-4 w-full justify-between items-center mb-3 p-3
             rounded-lg bg-white shadow-sm border-gray-200"
          >
            <span className="text-gray-800 font-medium">{section.name}</span>
            <Dropdown options={dropdownOptions} sectionId={section.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionList;
