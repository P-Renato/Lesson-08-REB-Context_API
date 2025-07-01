import { useState } from "react";
import { AppContext } from "./AppContext";
import { useContext } from "react";

function Chat() {
  const { user, messages, setMessages } = useContext(AppContext);
  const { userInput, setUserInput } = useState("");
  return (
    <div>
      {user && (
        <div>
          <div>
            {messages.map((x, i) => (
              <div key={i}> {x} </div>
            ))}
          </div>

          <div className="w-6xl h-6xl bg-cyan-300">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button 
                onClick={() => {
                    setMessages((prev) => [...prev, userInput]);
                    setUserInput("");
                }}
                >
               Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
