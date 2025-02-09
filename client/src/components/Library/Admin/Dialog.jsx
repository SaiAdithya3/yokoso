import React from "react";
import PropTypes from "prop-types";
import { Button } from "@/components/ui/button";

const Dialog = ({ isOpen, title, onConfirm, onCancel, children }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? "" : "hidden"}`}>
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-6 rounded-lg z-10">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{title}</h2>
          <button className="text-gray-500 hover:text-gray-700" onClick={onCancel}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div>{children}</div>
        <div className="flex justify-end mt-4">
          <Button 
          variant="primary" className="mr-2 bg-black text-white"
           onClick={onConfirm}>Confirm</Button>
          <Button variant="outline" className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100" onClick={onCancel}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Dialog;
