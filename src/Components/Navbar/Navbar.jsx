/* eslint-disable no-unused-vars */
import './Navbar.css'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { TbBasket } from "react-icons/tb";
const Navbar = () => {
    const[menu , setMenu] = useState('home')
return (
    <div className='navbar flex justify-between items-center  '>
    <img src={assets.logo} alt="" />
    <ul className="navbar-menu gap-5 flex">
        <li className= {menu === 'home' ? 'active': ""} onClick={()=>{setMenu('home')}}>home</li>
        <li className= {menu === 'menu' ? 'active': ""} onClick={()=>{setMenu('menu')}}>menu</li>
        <li className= {menu === 'mobile-app' ? 'active': ""} onClick={()=>{setMenu('mobile-app')}}>mobile app</li>
        <li className= {menu === 'contact-us' ? 'active': ""} onClick={()=>{setMenu('contact-us')}}>contact us</li>
    </ul>
    <div className="navbar-right gap-5 flex items-center">
            <FiSearch className='search_icon' />
            <div className="navbar-search-icon relative">
                <TbBasket className='basket_icon' />
                <div className="dot absolute "></div>
            </div>
            <button>log in</button>
    </div>
    </div>
)}

export default Navbar
