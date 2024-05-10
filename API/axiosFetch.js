import axios from 'axios';
import { useContext } from 'react';
import { Productcontext } from '../context/product';
export   const fetchdata= async(url)=>{
     const {cart,setCart}=useContext(Productcontext);
    try {
        const response= await axios.get(url)
    if(response.data){
     
        const updatedCart = [...cart, ...response.data];
        setCart(updatedCart);
  
    }
    } catch (error) {
        console.log(error.message);
    }
}
