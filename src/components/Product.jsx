import React from "react";
import { Link } from "react-router-dom";
const Product = ({ item }) => {
  return (
    <div className="Product_Box">
      <div className="image">
        <img src={item.images[0].image} alt="photo" />
      </div>
      <p>{item.name}</p>
      <h4>{item.price}</h4>

      <Link to={`/productdetails/${item.name}`}>
        <button>View Details</button>
      </Link>
    </div>
  );
};

export default Product;
