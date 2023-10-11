import React from 'react'
import AddDestination from './AddDestination'
import DestinationList from './DestinationList'
import RandomDestination from './RandomDestination'

function DestinationIndex() {
  return (
    <div className="text-black">
      <h1 className="text-success text-center">Travel List</h1>
      <AddDestination />
      <DestinationList />
      <RandomDestination/>
    </div>
  )
}

export default DestinationIndex