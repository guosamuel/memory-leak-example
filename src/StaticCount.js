import React from 'react'

function StaticCount(props) {
  return (
    <div>
      <h1>Static Count!</h1>
      <h2>Count should not be increasing in the console whenever I click on the page: {props.count}</h2>
    </div>
  )
}

export default StaticCount
