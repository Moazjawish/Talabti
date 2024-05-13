/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext} from "react"
import { assets } from "../../assets/assets"
import { StoreContext } from "../../Context/StoreContext";
import './FoodItem.css'
import { FaCirclePlus } from "react-icons/fa6";
import { FaCircleMinus } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";

const FoodItem = ({id ,name ,image ,price ,description }) => {
    const {cartItems , addToCart , removeFromCart} = useContext(StoreContext)
    return (
        <div className="food-item">
        <div className="food-item-image-container">
            <img className="food-item-image" src={image} alt="" />        
        {    !cartItems[id] ? <button className="add" onClick={()=>addToCart(id)}><MdAddShoppingCart/></button> 
            :  
            <div className="food-item-counter">
                <button  onClick={()=>removeFromCart(id)}><FaCircleMinus /></button>
                {cartItems[id]} 
                <button  onClick={()=>addToCart(id)}><FaCirclePlus/></button> 
            </div>
        }
        </div>
    <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
    </div>
    </div>
)}

export default FoodItem
