import { useContext, useState } from "react";
import { AppContext } from "./AppContext";

export default function Chat() {
  const { user, messages, setMessages } = useContext(AppContext);
  const [userInput, setUserInput] = useState("");

  return (
    <div>
      {user && (
        <div
          style={{
            width: "280px",
            height: "200px",
            backgroundColor: "lightgreen",
            padding: "20px",
            position: "absolute",
            bottom: "100px",
            right: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            {messages.map((x, i) => (
              <div key={i}> {x} </div>
            ))}
          </div>

          <div>
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
              send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
