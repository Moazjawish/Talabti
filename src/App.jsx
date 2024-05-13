/* eslint-disable no-unused-vars */
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import LoginPopup from './Components/LoginPopup/LoginPopup'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer'
import { Routes , Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
function App() {
  const [showLogin , setShowLogin] = useState(false)
  return (
    <>
    {showLogin ? <LoginPopup setShowLogin = {setShowLogin}/> :<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
  </>
  )
}

export default App
