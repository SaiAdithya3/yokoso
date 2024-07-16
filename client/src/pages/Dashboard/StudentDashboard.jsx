import React from 'react';
import StudentSidebar from '@/components/common/Nav/StudentSidebar';

const StudentDashboard = () => {
  return (
    <div className="flex gap-4">
      <StudentSidebar />
      <div className="flex w-full">
        student kudasai
      </div>
    </div>
  )
}

export default StudentDashboard