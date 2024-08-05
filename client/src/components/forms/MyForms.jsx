// MyForms.jsx
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const MyForms = () => {
  const [forms, setForms] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(null);
  const [showShareModal, setShowShareModal] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedForms = JSON.parse(localStorage.getItem("forms")) || [];
    setForms(savedForms);
  }, []);

  const handleAddForm = () => {
    const newId = Date.now(); // Use timestamp as a unique ID
    navigate(`/f/forms/${newId}`);
  };

  const handleDeleteForm = (id) => {
    setShowDeleteModal(id);
  };

  const handleShareForm = (id) => {
    setShowShareModal(id);
  };

  const handleConfirmDelete = (id) => {
    const savedForms = JSON.parse(localStorage.getItem("forms")) || [];
    const updatedForms = savedForms.filter((form) => form.id !== id);
    localStorage.setItem("forms", JSON.stringify(updatedForms));
    localStorage.removeItem(`responses-${id}`);
    setForms(updatedForms);
    setShowDeleteModal(null);
  };

  const handleConfirmShare = (id) => {
    const formUrl = `${window.location.origin}/f/forms/${id}/view`;
    navigator.clipboard.writeText(formUrl);
    setShowShareModal(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Forms</h1>
      <div className="mb-4">
        <button
          onClick={handleAddForm}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Form
        </button>
      </div>
      <div>
        {forms.length > 0 ? (
          <ul>
            {forms.map((form, index) => (
              <li
                key={index}
                className="mb-4 p-4 border border-gray-300 rounded-md"
              >
                <h2 className="text-lg font-medium">{form.title}</h2>
                <p className="text-sm text-gray-600">
                  Deadline: {form.deadline}
                </p>
                <p className="text-sm text-gray-600">
                  Description: {form.description}
                </p>
                <Link to={`/f/forms/${form.id}`}>
                  <button className="text-blue-500 hover:underline">
                    Edit Form
                  </button>
                </Link>
                <Link to={`/f/forms/${form.id}/view`}>
                  <button className="text-blue-500 hover:underline ml-4">
                    View Form
                  </button>
                </Link>
                <Link to={`/f/forms/${form.id}/responses`}>
                  <button className="text-blue-500 hover:underline ml-4">
                    View Responses
                  </button>
                </Link>
                <button className="text-blue-500 hover:underline ml-4"
                onClick={() => handleShareForm(form.id)}
                >
                  Share Form
                </button>
                <Link to={`/f/forms/${form.id}/report`}>
                  <button className="text-blue-500 hover:underline ml-4">
                    View Report
                  </button>
                </Link>
                <button
                  className="text-red-500 hover:underline ml-4"
                  onClick={() => handleDeleteForm(form.id)}
                >
                  Delete Form
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No forms available.</p>
        )}
      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <p>Are you sure you want to delete this form?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowDeleteModal(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={() => handleConfirmDelete(showDeleteModal)}
                className="bg-red-500 text-white px-4 py-2 rounded-md ml-4"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {showShareModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 rounded-md shadow-lg">
            <p>Share the following link to allow others to access the form:</p>
            <input
              type="text"
              value={`${window.location.origin}/f/forms/${showShareModal}/view`}
              readOnly
              className="mt-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setShowShareModal(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Close
              </button>
              <button
                onClick={() => handleConfirmShare(showShareModal)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md ml-4"
              >
                Copy Link
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyForms;
