import React from 'react';
import StudentSidebar from '@/components/common/Nav/StudentSidebar';
import ProfilePage from '@/components/profile/ProfilePage';

const StudentProfile = () => {
  return (
    <div className="flex gap-4">
      <StudentSidebar />
      <ProfilePage />
    </div>
  )
}

export default StudentProfile