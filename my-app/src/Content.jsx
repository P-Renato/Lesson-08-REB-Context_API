import { useContext } from "react"
import { AppContext } from "./AppContext"

function Content() {

    const {user} = useContext(AppContext)
    const products = []

    for (let i=1; i<20; i++){
        let product = {id: 1, name: "product " + i}
        products.push(product)
    }
  return (
    <div className="flex flex-wrap justify-evenly gap-2.5 ">
      {products.map((product) =>( <div key={product.id} className="w-42 h-42 p-10 bg-red-200 flex flex-col "> <h3 className="flex justify-center items-center w-full h-full"> {product.name} </h3>
      {user? <button>Buy</button> : <p>Log in to buy</p> }
       </div>
    ))}
      
    </div>
  )
}

export default Content
