import React from "react";
import "../Style.css";
import { useParams } from "react-router-dom";
import { data } from "../data";

export const Product = () => {
  const { id } = useParams();

  const product = data.find((item) => id === item.id);
  console.log(product);

  return (
    <div className="product">
      <img src={product.image} alt="coverimage" />
      <div className="column">
        <h1>{product.title}</h1>
        <p>{product.information}</p>
        <h4 className="card-price">{product.price}</h4>
        <button className="btn btn-outline-warning">Buy Now</button>      
      </div>
      
      
    </div>
    

  );
};
