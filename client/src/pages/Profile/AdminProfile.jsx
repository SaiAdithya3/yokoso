import React from 'react';
import ProfilePage from '@/components/profile/ProfilePage';
import AdminSidebar from '@/components/common/Nav/AdminSidebar';

const StudentProfile = () => {
  return (
    <div className="flex gap-4">
      <AdminSidebar />
      <ProfilePage />
    </div>
  )
}

export default StudentProfile