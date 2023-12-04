import React, { useState, useEffect } from "react";
import Product from "./components/Products/Products";
import { commerce } from "./components/Products/commerce";
import { Navbar } from "./components/Products";
import {Cart} from './components/Cart/Cart'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const {data} = await commerce.products.list()
     

    setProducts(data)
  }

    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve())
      
    }
    
    const handleAddToCard = async (productId, quantity) => {
       const item = await commerce.cart.add(productId, quantity)

       setCart(item.cart)
    }
    console.log(cart);
    
   useEffect(() => {
      fetchProducts()
      fetchCart()
   }, [])
    



  return (
   <div>
     <Navbar/>
     {/* <Product products={products} onAddToCard={handleAddToCard}/> */}
     <Cart cart={cart}/>
   </div>
  );
}

export default App;
