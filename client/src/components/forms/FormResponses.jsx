import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FormResponses = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const savedForms = JSON.parse(localStorage.getItem('forms')) || [];
    const form = savedForms.find(form => form.id === id);
    setForm(form);

    const savedResponses = JSON.parse(localStorage.getItem('responses')) || [];
    const formResponses = savedResponses.filter(response => response.formId === id);
    setResponses(formResponses);
  }, [id]);

  if (!form) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Form Responses</h1>
        <p>Form not found.</p>
      </div>
    );
  }

  if (responses.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Form Responses</h1>
        <p>No responses found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{form.title} - Responses</h1>
      {responses.map((response, responseIndex) => (
        <div key={responseIndex} className="mb-6 p-4 border border-gray-300 rounded-md">
          <h2 className="text-lg font-medium mb-4">Response {responseIndex + 1}</h2>
          {form.elements.map((element, elementIndex) => (
            <div key={elementIndex} className="mb-2">
              <label className="block text-md font-medium text-gray-700">{element.label}</label>
              <div className="mt-1 text-sm text-gray-900">
                {element.type === 'checkbox'
                  ? (response.responses[elementIndex] || []).join(', ')
                  : response.responses[elementIndex] || 'N/A'}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FormResponses;
