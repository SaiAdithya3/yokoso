import AdminSidebar from '@/components/common/Nav/AdminSidebar'
import AdminOver from '@/components/overview/AdminOver'
import React from 'react'

const Overview = () => {
  return (
    <div className='flex gap-4 '>
        <AdminSidebar />
        <div>
            <AdminOver />
        </div>
    </div>
  )
}

export default Overview