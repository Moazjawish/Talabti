/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)
const StoreContextProvider = ({children}) =>
{
    const [cartItmes, setCartItems] = useState({}) 
    
    const addToCart = (itemId)=>{
        if(!cartItmes[itemId])
        {
            setCartItems(prev => ({...prev , [itemId]:1}))
        }
        else
        {
            setCartItems((prev) => ({...prev , [itemId]:prev[itemId]+1}))
        }
    }
    
    const removeFromCart = (itemId)=>{
        setCartItems((prev) =>({...prev , [itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        console.log(cartItmes)
    } , [cartItmes])
    
    const contextvalue = {food_list , cartItmes , setCartItems , addToCart , removeFromCart}




    return(<>
    <StoreContext.Provider value={contextvalue}> 
        {children}
    </StoreContext.Provider>
    </>)
}
export default StoreContextProvider

