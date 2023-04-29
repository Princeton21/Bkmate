import { useState } from 'react'
import './App.css'
import Home from '../src/Pages/Home/Home'
import Cart from '../src/Components/Cart/Cart'
import Navbar from './Components/Navbar/Navbar'
import Books from './Pages/Books/Books'
import { CartProvider } from './Context/CartProvider'

function App() {
 const [cartIsShown, setCartIsShown] = useState(false)

 const showCartHandler =()=>{
  setCartIsShown(true)
 }
 const hideCartHandler=()=>{
  setCartIsShown(false)
 }
  return (
    <CartProvider>
      {cartIsShown&&<Cart onClose={hideCartHandler}/>}
      <Navbar onShowCart={showCartHandler}/>
      <main>
        <Books/>
      </main>
    </CartProvider>
  )
}

export default App
