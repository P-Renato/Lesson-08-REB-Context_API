import React, { Fragment } from 'react'
import MiddleA from './MiddleA'
import'./App.css'

function App() {
  const username = "John Doe"
  return (
    <Fragment>
      App:
      <MiddleA username={username}/>
    </Fragment>
  )
}

export default App
