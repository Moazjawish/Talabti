/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)
const StoreContextProvider = ({children}) =>
{
    const [cartItems , setCartItems] = useState({})
    const addToCart = (itemId)=>{
        if(!cartItems[itemId])
        {
            setCartItems((prev)=>({...prev , [itemId]:1}))
        }
        else
        {
            setCartItems((prev)=>({...prev , [itemId]:prev[itemId]+1}))
        }
    }
    
    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev , [itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = ()=>{
        let totalamount = 0
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
                {
                    let itemInfo = food_list.find((product)=>product._id === item)
                    totalamount+=itemInfo.price * cartItems[item]
                }
        }
        return totalamount
    }


    const contextvalue = {food_list , cartItems , setCartItems , addToCart , removeFromCart , getTotalCartAmount}
    
    return(<>
    <StoreContext.Provider value={contextvalue}> 
        {children}
    </StoreContext.Provider>
    </>)
}
export default StoreContextProvider

