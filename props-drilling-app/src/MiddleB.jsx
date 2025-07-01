import React from 'react'
import MiddleC from './MiddleC'

function MiddleB({username}) {
  return (
    <div>
      MiddleB:
        <MiddleC newUsername={username} />
    </div>
  )
}

export default MiddleB
