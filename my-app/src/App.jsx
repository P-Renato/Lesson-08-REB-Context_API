import { useState } from 'react'
import './App.css'
import Content from './Content.jsx'
import Chat from './Chat.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import { AppContext } from './AppContext.jsx'

function App() {
  const [user,setUSer] = useState(null)
  const [messages, setMessages] = useState([])

  return (
  <AppContext.Provider value={{user, setUSer, messages, setMessages}}>
   
      <Header />
      <Content />
      <Footer />
      <Chat />
   
  </AppContext.Provider>
  )
}

export default App
