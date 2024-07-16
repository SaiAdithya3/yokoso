import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'

const TimeTable = () => {
  return (
    <div className='   rounded-2xl border w-full h-full p-4'>
      <div className=' flex  items-center  justify-between'>
      <h1 className=' text-lg'>Time Table</h1>
        <button className=' px-3 py-1 border   rounded-lg'>See All</button>
      </div>
      <div>
        <Button>Bankai</Button>
        <Card>ajbaj</Card>
      </div>
    </div>
  )
}

export default TimeTable