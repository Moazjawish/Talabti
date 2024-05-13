// import {assets} from '../../assets/assets'
import { FaFacebookSquare , FaTwitterSquare , FaLinkedin  } from "react-icons/fa";
import './Footer.css'
const Footer = () => {
return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
        <p className="logo">Talabati</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga at voluptatibus, fugiat sint quae veniam laudantium tempora nihil iste nisi porro! Libero ut nihil earum corrupti obcaecati odit tempora at!</p>
            <div className="footer-social-icons">
            <button><FaFacebookSquare /></button>
            <button><FaTwitterSquare/></button>
            <button><FaLinkedin /></button>
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+963303030</li>
                <li>maoz.tomato@gmail.com</li>
            </ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyright">Copyright 2024 @ Talabati.com - All Right Reserved. </p>
    </div>
)}

export default Footer
