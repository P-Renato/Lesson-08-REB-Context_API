import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Content() {
  const { user } = useContext(AppContext);

  const products = [];

  for (let i = 1; i <= 20; i++) {
    let product = { id: i, name: "product " + i };
    products.push(product);
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        gap: "10px",
      }}
    >
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            width: "120px",
            height: "120px",
            padding: "10px",
            backgroundColor: "lightcoral",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <h3> {product.name} </h3>
          {user ? <button> Buy </button> : <p>Log in to buy</p>}
        </div>
      ))}
    </div>
  );
}
