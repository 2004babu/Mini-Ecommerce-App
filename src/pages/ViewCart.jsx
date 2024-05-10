import React, { useContext, useEffect, useState } from "react";
import CartProduct from "../components/CartProduct";
import { Productcontext } from "../../context/product";

const ViewCart = () => {
  const {cart,Search,setsearch}=useContext(Productcontext)
  const [totalamount,setotal]=useState(null)
  const [sqty,setsqty]=useState(null)
  const [post,setpost]=useState([])
  useEffect(()=>{
    const data=cart.reduce((acc,value)=>{return acc+ value.price*value.qty},0)
    setotal(data)
  },[cart,sqty])
useEffect(()=>{
  setsearch('')
},[]);
useEffect(()=>{
  if (Search==='') {
    setpost(cart)
  }else{

    const filtered=cart.filter((item)=>{
      return item.name.toLowerCase().includes(Search.toLowerCase())||
      item.description.toLowerCase().includes(Search.toLowerCase())
    })
    setpost(filtered)
  }
},[Search,cart])

  return( 
  <>
  <main className="Viewcart_Container">
  {post.map((item,index) => (
        <CartProduct key={index} product={item} setsqty={setsqty}/>
        ))}
        <div className="order">
          <h1>Total  Amount: <span>{totalamount>1?totalamount.toFixed(2):totalamount}</span></h1>
         {!post.length && <h1>No Cart Added ..</h1> }
        </div>

          </main>

  </>
  )
};

export default ViewCart;
