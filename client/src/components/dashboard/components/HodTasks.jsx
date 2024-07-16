import React from 'react';

const HodTasks = () => {
  const tasks = [
    { id: 1, title: "Review final exam papers", status: "In Progress" },
    { id: 2, title: "Prepare department budget report", status: "Pending" },
    { id: 3, title: "Approve faculty leave requests", status: "Completed" },
  ];

  return (
    <div className="bg-white shadow-lg w-[22rem] rounded-lg p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">HOD Tasks</h3>
      <div className="space-y-3">
        {tasks.map(task => (
          <div key={task.id} className="flex items-center p-3 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zM8 13a1 1 0 11-2 0 1 1 0 012 0zm2-6a1 1 0 100-2 1 1 0 000 2zm4 5a1 1 0 110-2 1 1 0 010 2zm-5 2a1 1 0 11-2 0 1 1 0 012 0z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3 flex-grow">
              <p className="text-sm text-gray-800">{task.title}</p>
              <span className={`inline-block text-xs font-semibold py-1 px-2 uppercase rounded-full ${getStatusColor(task.status)}`}>
                {task.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Function to determine status color based on status
const getStatusColor = (status) => {
  switch (status) {
    case "In Progress":
      return "bg-yellow-200 text-yellow-800";
    case "Pending":
      return "bg-blue-200 text-blue-800";
    case "Completed":
      return "bg-green-200 text-green-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
};

export default HodTasks;
