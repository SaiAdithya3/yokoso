import React from 'react'
import Nav from '../common/Nav/Nav'
import Sidebar from '../dashboard/components/Sidebar'
import CardPage from './components/CardPage'

const Dashboard = () => {
  return (
    <div className=' flex  gap-4'>
        <Nav/>
        <CardPage/>
    </div>
  )
}

export default Dashboard