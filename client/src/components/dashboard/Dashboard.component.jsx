import React from 'react';
import Nav from '../common/Nav/Nav';
import Sidebar from '../dashboard/components/Sidebar';
import CardPage from './components/CardPage';
import FacultySidebar from '../common/Nav/FacultySidebar';

const Dashboard = () => {
  return (
    <div className=' flex  gap-4'>
        <FacultySidebar/>
        <CardPage/>
    </div>
  )
}

export default Dashboard