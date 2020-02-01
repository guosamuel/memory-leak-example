import React from 'react'

function StaticCount() {
  return (
    <div>
      <h1>Static Count!</h1>
      <h2>Count should not be increasing in the console whenever I click on the page.</h2>
      <button className="button">Check the console log</button>
    </div>
  )
}

export default StaticCount
