import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const FormBuilder = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [description, setDescription] = useState("");
  const [elements, setElements] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedForms = JSON.parse(localStorage.getItem("forms")) || [];
    const form = savedForms.find((form) => form.id === id);
    if (form) {
      setTitle(form.title);
      setDeadline(form.deadline);
      setDescription(form.description);
      setElements(form.elements || []);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = { id, title, deadline, description, elements };
    const savedForms = JSON.parse(localStorage.getItem("forms")) || [];
    const updatedForms = savedForms.filter((form) => form.id !== id);
    updatedForms.push(form);
    localStorage.setItem("forms", JSON.stringify(updatedForms));
    navigate("/f/forms");
  };

  const addElement = (type) => {
    setElements([
      ...elements,
      { type, label: "New Label", value: "", required: false, options: [] },
    ]);
  };

  const handleElementChange = (index, field, value) => {
    const newElements = [...elements];
    newElements[index][field] = value;
    setElements(newElements);
  };

  const addOption = (index) => {
    const newElements = [...elements];
    newElements[index].options.push("");
    setElements(newElements);
  };

  const removeOption = (elementIndex, optionIndex) => {
    const newElements = [...elements];
    newElements[elementIndex].options = newElements[
      elementIndex
    ].options.filter((_, i) => i !== optionIndex);
    setElements(newElements);
  };

  const handleOptionChange = (elementIndex, optionIndex, value) => {
    const newElements = [...elements];
    newElements[elementIndex].options[optionIndex] = value;
    setElements(newElements);
  };

  const removeElement = (index) => {
    setElements(elements.filter((_, i) => i !== index));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create/Edit Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Form Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Deadline
          </label>
          <input
            type="date"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div>
          <button
            type="button"
            onClick={() => addElement("text")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Add Text
          </button>
          <button
            type="button"
            onClick={() => addElement("link")}
            className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Add Link
          </button>
          <button
            type="button"
            onClick={() => addElement("textarea")}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Add Textarea
          </button>
          <button
            type="button"
            onClick={() => addElement("dropdown")}
            className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Add Dropdown
          </button>
          <button
            type="button"
            onClick={() => addElement("checkbox")}
            className="bg-purple-500 text-white px-4 py-2 rounded-md mr-2"
          >
            Add Checkbox
          </button>
        </div>

        {elements.map((element, index) => (
          <div
            key={index}
            className="mt-4 p-4 border border-gray-300 rounded-md"
          >
            <div className="flex items-center mb-2">
              <p
                contentEditable
                suppressContentEditableWarning
                className="mr-2 text-lg font-medium text-gray-700 px-2 py-1 rounded-md cursor-text"
                onBlur={(e) =>
                  handleElementChange(index, "label", e.target.textContent)
                }
              >
                {element.label}
              </p>
              <button
                type="button"
                onClick={() => removeElement(index)}
                className="bg-red-500 text-white px-2 py-1 rounded-md"
              >
                Remove
              </button>
            </div>
            <div className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={element.required}
                onChange={(e) =>
                  handleElementChange(index, "required", e.target.checked)
                }
                className="mr-2"
                id={`required-${index}`}
              />
              <label
                className="text-sm text-gray-700"
                htmlFor={`required-${index}`}
              >
                Required
              </label>
            </div>
            {element.type === "text" && (
              <input
                type="text"
                value={element.value}
                onChange={(e) =>
                  handleElementChange(index, "value", e.target.value)
                }
                placeholder="Text Field"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
            {element.type === "link" && (
              <input
                type="text"
                value={element.value}
                onChange={(e) =>
                  handleElementChange(index, "value", e.target.value)
                }
                placeholder="Link URL"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
            {element.type === "textarea" && (
              <textarea
                value={element.value}
                onChange={(e) =>
                  handleElementChange(index, "value", e.target.value)
                }
                placeholder="Textarea"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            )}
            {element.type === "dropdown" && (
              <div>
                <button
                  type="button"
                  onClick={() => addOption(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md mb-2"
                >
                  Add Option
                </button>
                <select
                  value={element.value}
                  onChange={(e) =>
                    handleElementChange(index, "value", e.target.value)
                  }
                  className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Select an option</option>
                  {element.options.map((option, optionIndex) => (
                    <option key={optionIndex} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {element.options.map((option, optionIndex) => (
                  <div
                    key={optionIndex}
                    className="flex items-center mb-2 mt-2"
                  >
                    <input
                      type="text"
                      value={option}
                      onChange={(e) =>
                        handleOptionChange(index, optionIndex, e.target.value)
                      }
                      placeholder={`Option ${optionIndex + 1}`}
                      className="mr-2 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <button
                      type="button"
                      onClick={() => removeOption(index, optionIndex)}
                      className="bg-red-500 text-white px-2 py-1 rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            {element.type === "checkbox" && (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={element.value}
                  onChange={(e) =>
                    handleElementChange(index, "value", e.target.checked)
                  }
                  className="mr-2"
                />
                <span>Checkbox</span>
              </div>
            )}
          </div>
        ))}

        <div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Form
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormBuilder;
