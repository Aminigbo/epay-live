import React, { useState } from "react";
import { useCartContext } from "../Context/cart_context";
import "../CartContent/cart.css";
const AddToCart = ({ product }) => {
  // add to cart
  const { addToCart } = useCartContext();
  const { id } = product;
 

  return (
    <>
      <div
        id="add-btn"
        // className="btn-container"
        onClick={() => {
          // console.log(product)
          // addToCart(product)
        }}
      >
        <p style={{color:"white"}}>View product</p>
      </div>
    </>
  );
};
//
export default AddToCart;
