import React from 'react'
import { AppContext } from "./AppContext"
import { useContext } from "react"


function Footer() {
     const {user} = useContext(AppContext)
  return (
    <div className='h-20 bg-blue-200 mt-2 absolute bottom-0 right-0 left-0 grid place-items-center'>
        <h4> {user? "Hello, " + user.name : "Welcome to our site"}</h4>
        Footer
      
    </div>
  )
}

export default Footer
