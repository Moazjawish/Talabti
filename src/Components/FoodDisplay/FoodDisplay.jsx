/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext } from "react"
import './FoodDispaly.css'
import { StoreContext } from "../../Context/StoreContext"
import FoodItem from "../FoodItem/FoodItem"

const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext)
    return (
    <div className="food-dispaly" id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((item,index)=>{
                return <FoodItem key={index} id = {item._id} name = {item.name} image={item.image} description={item.description} category={item.category} price={item.price}/>
            })}
        </div>
    </div>
)}

export default FoodDisplay
