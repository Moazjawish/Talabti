/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Navbar.css'
import { useContext, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext';
import { FiSearch } from "react-icons/fi";
import { TbBasket } from "react-icons/tb";
import { Link } from 'react-router-dom';
const Navbar = ({setShowLogin}) => {
    const[menu , setMenu] = useState('home')
    const[activeNavbar , setActiveNavbar] = useState("")
    const{getTotalCartAmount} = useContext(StoreContext)
    function makeActiveNavbar()
    {
        window.addEventListener("scroll" , scrollingPoint)
    }
    
    function scrollingPoint()
    {
        if(this.scrollY > 100)
            {
                setActiveNavbar("activeNav")
            }
            else
            {
                setActiveNavbar("")
            }
    }

    makeActiveNavbar()

return (
    <div className={`navbar flex justify-between items-center ${activeNavbar}`}>
    <Link to='/'>
        <p className="logo">Talabati</p>
    </Link>
    <ul className="navbar-menu gap-5 flex">
        <Link to='/' className= {menu === 'home' ? 'active': ""} onClick={()=>{setMenu('home')}}>home</Link>
        <a href='#explore-menu' className= {menu === 'menu' ? 'active': ""} onClick={()=>{setMenu('menu')}}>menu</a>
        <a href='#app-download' className= {menu === 'mobile-app' ? 'active': ""} onClick={()=>{setMenu('mobile-app')}}>mobile app</a>
        <a href='#footer' className= {menu === 'contact-us' ? 'active': ""} onClick={()=>{setMenu('contact-us')}}>contact us</a>
    </ul>
    <div className="navbar-right gap-5 flex items-center">
            <FiSearch className='icon search_icon' />
            <div className="navbar-search-icon relative">
                <Link to='/cart'>
                <TbBasket className='icon basket_icon' />
                </Link>
                <div className={getTotalCartAmount()===0 ? "":"dot absolute" }></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>log in</button>
    </div>
    </div>
)}

export default Navbar
