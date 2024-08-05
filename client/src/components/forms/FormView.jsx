import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FormView = () => {
  const { id } = useParams();
  const [form, setForm] = useState(null);
  const [responses, setResponses] = useState({});

  useEffect(() => {
    const savedForms = JSON.parse(localStorage.getItem('forms')) || [];
    const form = savedForms.find(form => form.id === id);
    setForm(form);
  }, [id]);

  const handleInputChange = (index, value) => {
    setResponses(prevResponses => ({
      ...prevResponses,
      [index]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedResponses = JSON.parse(localStorage.getItem('responses')) || [];
    savedResponses.push({ formId: id, responses });
    localStorage.setItem('responses', JSON.stringify(savedResponses));
    alert('Form responses saved!');
  };

  if (!form) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Form View</h1>
        <p>Form not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{form.title}</h1>
      <p className="text-sm text-gray-600">Deadline: {form.deadline}</p>
      <p className="text-sm text-gray-600 mb-4">Description: {form.description}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        {form.elements.map((element, index) => (
          <div key={index} className="mb-4">
            <label className="block text-lg font-medium text-gray-700">{element.label}</label>
            {element.type === 'text' && (
              <input
                type="text"
                value={responses[index] || ''}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required={element.required}
              />
            )}
            {element.type === 'link' && (
              <input
                type="text"
                value={responses[index] || ''}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required={element.required}
              />
            )}
            {element.type === 'textarea' && (
              <textarea
                value={responses[index] || ''}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required={element.required}
              />
            )}
            {element.type === 'dropdown' && (
              <select
                value={responses[index] || ''}
                onChange={(e) => handleInputChange(index, e.target.value)}
                className="mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required={element.required}
              >
                <option value="">Select an option</option>
                {element.options.map((option, optionIndex) => (
                  <option key={optionIndex} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
            {element.type === 'checkbox' && (
              <div className="flex items-center">
                {element.options.map((option, optionIndex) => (
                  <label key={optionIndex} className="inline-flex items-center mr-4">
                    <input
                      type="checkbox"
                      value={option}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setResponses(prevResponses => {
                          const currentValues = prevResponses[index] || [];
                          return {
                            ...prevResponses,
                            [index]: checked
                              ? [...currentValues, option]
                              : currentValues.filter(value => value !== option)
                          };
                        });
                      }}
                      className="form-checkbox h-5 w-5 text-indigo-600"
                      required={element.required && responses[index]?.length === 0}
                    />
                    <span className="ml-2 text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Form
        </button>
      </form>
    </div>
  );
};

export default FormView;
