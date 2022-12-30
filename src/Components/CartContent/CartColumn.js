import React from "react";
import "./cart.css";
const CartColumns = () => {
  return (
    <>
      <div className="content cart-menu">
        <p id="cart-product-menu">Product</p>
        <p>Quantity</p>
        <p>Subtotal</p>
        {/* <span></span> */}
      </div>
      {/* <hr /> */}
    </>
  );
};

export default CartColumns;
