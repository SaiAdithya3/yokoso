import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Select, SelectItem } from '../ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/card';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Individual Field Components
const FormElement = ({ type, label, value, options, onChange }) => {
  switch (type) {
    case 'text':
      return (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {label}
            <Input
              className="mt-1 block w-full"
              type="text"
              placeholder={label}
              value={value}
              onChange={(e) => onChange(e.target.value, 'value')}
            />
          </label>
        </div>
      );
    case 'radio':
      return (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
          {options.map((option, index) => (
            <div key={index}>
              <input
                type="radio"
                value={option}
                name={label}
                onChange={(e) => onChange(e.target.value, 'value')}
              />
              <label className="ml-2">{option}</label>
            </div>
          ))}
        </div>
      );
    case 'checkbox':
      return (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">{label}</label>
          {options.map((option, index) => (
            <div key={index}>
              <input
                type="checkbox"
                value={option}
                onChange={(e) => onChange(e.target.checked, 'checked')}
              />
              <label className="ml-2">{option}</label>
            </div>
          ))}
        </div>
      );
    case 'textarea':
      return (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {label}
            <textarea
              className="mt-1 block w-full"
              placeholder={label}
              value={value}
              onChange={(e) => onChange(e.target.value, 'value')}
            />
          </label>
        </div>
      );
    case 'link':
      return (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {label}
            <Input
              className="mt-1 block w-full"
              type="url"
              placeholder={label}
              value={value}
              onChange={(e) => onChange(e.target.value, 'value')}
            />
          </label>
        </div>
      );
    case 'number':
      return (
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            {label}
            <Input
              className="mt-1 block w-full"
              type="number"
              placeholder={label}
              value={value}
              onChange={(e) => onChange(e.target.value, 'value')}
            />
          </label>
        </div>
      );
    default:
      return null;
  }
};

const FormBuilder = () => {
    const [formData, setFormData] = useState([]);
    const [formTitle, setFormTitle] = useState('');
    const [formDescription, setFormDescription] = useState('');
  
    const addElement = (type) => {
      setFormData([...formData, { type, label: '', value: '', options: [] }]);
    };
  
    const updateElement = (index, field) => {
      const newFormData = formData.map((el, i) => (i === index ? { ...el, ...field } : el));
      setFormData(newFormData);
    };
  
    const removeElement = (index) => {
      setFormData(formData.filter((_, i) => i !== index));
    };
  
    const onDragEnd = (result) => {
      if (!result.destination) return;
  
      const newFormData = Array.from(formData);
      const [removed] = newFormData.splice(result.source.index, 1);
      newFormData.splice(result.destination.index, 0, removed);
  
      setFormData(newFormData);
    };
  
    return (
      <div className="p-6 max-w-6xl mx-auto bg-white rounded-lg shadow-md flex">
        {/* Form Builder Section */}
        <div className="w-1/2 p-4 border-r border-gray-300">
          <h1 className="text-2xl font-bold mb-6">Dynamic Form Builder</h1>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Form Title:</label>
            <Input
              className="mt-1 block w-full"
              type="text"
              value={formTitle}
              onChange={(e) => setFormTitle(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">Form Description:</label>
            <Input
              className="mt-1 block w-full"
              type="text"
              value={formDescription}
              onChange={(e) => setFormDescription(e.target.value)}
            />
          </div>
          <div className="flex space-x-4 mb-6">
            <Button variant="primary" onClick={() => addElement('text')}>
              Add Text Input
            </Button>
            <Button variant="primary" onClick={() => addElement('radio')}>
              Add Radio Input
            </Button>
            <Button variant="primary" onClick={() => addElement('checkbox')}>
              Add Checkbox
            </Button>
            <Button variant="primary" onClick={() => addElement('textarea')}>
              Add Textarea
            </Button>
            <Button variant="primary" onClick={() => addElement('link')}>
              Add Link
            </Button>
            <Button variant="primary" onClick={() => addElement('number')}>
              Add Number Input
            </Button>
          </div>
          <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="formElements">
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {formData.map((element, index) => (
                    <Draggable key={index} draggableId={index.toString()} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="mb-6 border p-4 rounded-lg shadow-md bg-gray-50"
                        >
                          <FormElement
                            type={element.type}
                            label={element.label}
                            value={element.value}
                            options={element.options}
                            onChange={(value, key) => updateElement(index, { [key]: value })}
                          />
                          <Button variant="danger" className="mt-4" onClick={() => removeElement(index)}>
                            Remove
                          </Button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        {/* Form Preview Section */}
        <div className="w-1/2 p-4">
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>{formTitle}</CardTitle>
              <CardDescription>{formDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              {formData.map((element, index) => (
                <div key={index} className="mb-4">
                  <FormElement
                    type={element.type}
                    label={element.label}
                    value={element.value}
                    options={element.options}
                    onChange={(value, key) => updateElement(index, { [key]: value })}
                    readOnly
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    );
  };
  
  export default FormBuilder;
   