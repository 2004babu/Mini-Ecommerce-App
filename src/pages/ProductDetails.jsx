import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Productcontext } from "../../context/product";

const ProductDetails = () => {
  const [btnremove, setbtnremove] = useState(false);
  const [save, setSave] = useState(false);
  const { id } = useParams();
  const [qty, setqty] = useState(1);
  const { data, cart, setCart } = useContext(Productcontext);
  function handledegress(params) {
    if(btnremove){
      setSave(true)
    }
    if (qty > 1) {
      setqty(qty - 1);
    }
    return;
  }
  function handlesaveChanges(params) {
    const filtered=cart.filter((item)=>(item===params))
    filtered[0].qty=qty
  setSave(false)
  }
  function handleincress(params) {
    if(btnremove){
      setSave(true)
      
    }
    if (Show[0].stock!==qty) {
      setqty(qty + 1);
    }return
  }
  const handleaddcart = (d) => {
    if (cart.length > 0) {
      const checke = cart.filter((item) => item.name === d.name);
      if (checke.length) {
        return;
      } else {
        d.qty = qty;

        setCart([...cart, d]);
      }
    } else {
      d.qty = qty;
      setCart([...cart, d]);
    }
  };

  const Show = data.filter((item) => id === item.name);
  const handleRemovecart = (d) => {
    const filtereddata = cart.filter((item) => item.name !== d.name);

    setCart(filtereddata);
  };
  useEffect(() => {
    const btntype = () => {
      return cart.includes(Show[0]);
    };
    setbtnremove(btntype());
  }, [cart, handleRemovecart]);
  return (
    <div className="ProductDetail_Container">
      <div className="image">
        <img src={Show[0].images[0].image} alt={Show[0].name} />
      </div>
      <div className="right">
        <h4>{Show[0].name}</h4>
        <br />
        <hr />
        <h2>{Show[0].price}</h2>
        <div className="buttons">
          <div>
            <button onClick={handledegress}>-</button>
            <h3>{qty}</h3>
            <button onClick={handleincress}>+</button>
          </div>

          {save ? (<button onClick={()=>handlesaveChanges(Show[0])}>
            setSave
          </button>):btnremove ? (
            <button
              style={{ backgroundColor: "red" }}
              onClick={() => handleRemovecart(Show[0])}
            >
              remove
            </button>
          ) : (
            <button onClick={() => handleaddcart(Show[0])}>Add Cart</button>
          )}
        </div>
        <hr />
        <br />
        <span>
          In Stock :{" "}
          <span
            className="success"
            style={Show[0].stock > 0 ? { color: "green" } : { color: "red" }}
          >
            {Show[0].stock}
          </span>
        </span>
        <br />
        <hr />
        <p>{Show[0].description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
