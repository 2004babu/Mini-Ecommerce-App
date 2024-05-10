import React, { useContext, useEffect, useState } from "react";
import { Productcontext } from "../../context/product";

const CartProduct = ({ product ,setsqty }) => {
  const { cart, setCart } = useContext(Productcontext);
  const [qty,setqty]=useState(product.qty)
  const handledelete = () => {
    if (confirm(" do you want to remove From Cart ?")) {
      const filtereddata = cart.filter((item) => item.name !== product.name);
      setCart(filtereddata);
    }
  };
  useEffect(()=>{
    product.qty=qty
    setsqty(qty)
    
  },[qty])
  function handledegress(params) {
    if (qty > 1) {
      setqty(qty - 1);
     
    }
    return;
  }
  function handleincress(params) {
    
    if (product.stock!==qty) {
      setqty(qty + 1);
    }
    else{
      alert(`${product.stock} stocks only there ..`)
    }return
  }
  return (
    <div className="Each_Product">
      <div className="image">
        <img src={product.images[0].image} alt={product.name} />
      </div>
      <h5>
        {product.description.length < 25
          ? product.description
          : product.description.substring(0, 80) + "..."}
      </h5>
      <div className="buttons">
        <button onClick={()=>handledegress(product)}>-</button>
        <h3>{qty}</h3>
        <button onClick={()=>handleincress(product)}>+</button>
      </div>
      <div className="delete" onClick={handledelete}>
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
};

export default CartProduct;
