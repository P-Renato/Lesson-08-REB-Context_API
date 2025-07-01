import React from 'react'
import MiddleB from './MiddleB'

function MiddleA({username}) {
  return (
    <div>
      MiddleA
      <MiddleB username={username}/>
    </div>
  )
}

export default MiddleA
