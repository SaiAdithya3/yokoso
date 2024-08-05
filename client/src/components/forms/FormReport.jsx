import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FormReport = () => {
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
        <h1 className="text-2xl font-bold mb-4">Form Report</h1>
        <p>Form not found.</p>
      </div>
    );
  }

  if (responses.length === 0) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Form Report</h1>
        <p>No responses found.</p>
      </div>
    );
  }

  const generateReport = () => {
    return form.elements.map((element, elementIndex) => {
      if (element.type === 'checkbox') {
        const optionCounts = element.options.map(option => {
          return responses.reduce((count, response) => {
            const responseValue = response.responses[elementIndex];
            if (Array.isArray(responseValue)) {
              return count + (responseValue.includes(option) ? 1 : 0);
            }
            return count;
          }, 0);
        });
        return { ...element, optionCounts };
      } else {
        const values = responses.map(response => response.responses[elementIndex]);
        const counts = values.reduce((acc, value) => {
          if (value !== undefined && value !== null) {
            acc[value] = (acc[value] || 0) + 1;
          }
          return acc;
        }, {});
        return { ...element, counts };
      }
    });
  };

  const report = generateReport();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{form.title} - Report</h1>
      {report.map((element, index) => (
        <div key={index} className="mb-6 p-4 border border-gray-300 rounded-md">
          <h2 className="text-lg font-medium mb-4">{element.label}</h2>
          {element.type === 'checkbox' ? (
            <ul>
              {element.options.map((option, optionIndex) => (
                <li key={optionIndex} className="text-sm text-gray-700">
                  {option}: {element.optionCounts[optionIndex]} responses
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {Object.entries(element.counts).map(([value, count], valueIndex) => (
                <li key={valueIndex} className="text-sm text-gray-700">
                  {value}: {count} responses
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default FormReport;
