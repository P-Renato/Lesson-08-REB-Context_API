import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Header() {
  const { setUser, user } = useContext(AppContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "10vh",
        backgroundColor: "lightblue",
        marginBottom: "30px"
      }}
    >
      <h1>Logo</h1>
      <nav>
        <a href="#"> Nav 1 </a> - <a href="#">Nav 2</a>
      </nav>
      {user ? (
        <button onClick={() => setUser(null)}> Logout </button>
      ) : (
        <button onClick={() => setUser({ name: "John Doe" })}>Login</button>
      )}
    </div>
  );
}
