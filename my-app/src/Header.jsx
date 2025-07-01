import { useContext } from "react";
import { AppContext } from "./AppContext";

function Header() {
  const { setUser, user } = useContext(AppContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "10vh",
        background: "lightblue",
        marginBottom: "30px",
      }}
    >
      <h1 className="text-5xl">Logo</h1>
      <nav>
        <a href="#"> Nav 1 </a> - <a href="#"> Nav 2 </a>
      </nav>
      {user ? (
        <button onClick={() => setUser(null)}>Logout</button>
      ) : (
        <button onClick={() => setUser({ name: "John Doe" })}>Login</button>
      )}
    </div>
  );
}

export default Header;
