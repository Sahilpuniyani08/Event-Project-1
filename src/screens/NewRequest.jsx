import React from 'react'
import EventTable from '../components/EventTable'
import { mockEventRequests } from '../constants/mockData'

const NewRequest = () => {
  return (
     <div className="px-0 lg:px-4">
    <EventTable data={mockEventRequests} />
  </div>
  )
}

export default NewRequest