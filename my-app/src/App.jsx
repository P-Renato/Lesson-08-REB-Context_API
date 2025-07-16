import React from "react";
import { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Chat from "./Chat";
import { AppContext } from "./AppContext";

export default function App() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  return (
    <AppContext.Provider value={{user, setUser, messages, setMessages}}>
        <Header />
        <Content />
        <Footer />
        <Chat />
     
    </AppContext.Provider>
  );
}
