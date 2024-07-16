import React from 'react';
import ProfilePage from '@/components/profile/ProfilePage';
import FacultySidebar from '@/components/common/Nav/FacultySidebar';

const FacultyProfile = () => {
  return (
    <div className="flex gap-4">
      <FacultySidebar />
      <ProfilePage />
    </div>
  )
}

export default FacultyProfile