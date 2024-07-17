import React from 'react';
import DashboardComponent from '@/components/dashboard/Dashboard.component';


const FacultyDashboard = ({gotoAttendence}) => {
  return (
    <>
        <DashboardComponent gotoAttendence={gotoAttendence} />
    </>
  )
}

export default FacultyDashboard