import React from 'react';

const Announcements = () => {
  const announcements = [
    { id: 1, text: "Midterm exams start next week. Prepare accordingly.", date: "2023-07-10" },
    { id: 2, text: "New library books are available for borrowing.", date: "2023-07-08" },
    { id: 3, text: "Please submit your project proposals by the end of this month.", date: "2023-07-05" },
  ];

  return (
    <div className="bg-white w-[22rem] rounded-2xl  border p-4">
      <h3 className="text-lg font-semibold mb-3">Announcements</h3>
      <div className="space-y-3">
        {announcements.map(announcement => (
          <div key={announcement.id} className="flex items-start p-3 border border-gray-200 rounded-lg bg-gray-50">
            <div className="flex-shrink-0 text-blue-500">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 9.25a8 8 0 1115.994.001 8 8 0 01-15.994-.001zm8-4.25a1 1 0 00-.894.553L8 6.618 7.113 5.553a1 1 0 00-1.664 1.11l2 3.5a1 1 0 001.105.435A1 1 0 009 10v4a1 1 0 001 1h2a1 1 0 001-1v-4a1 1 0 00-.448-.832l-2-1.333A1 1 0 0011 6.618V6a1 1 0 00-.997-1H10zm1 8v-3h-1v3h1z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-gray-800">{announcement.text}</p>
              <p className="text-xs text-gray-500">{announcement.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
