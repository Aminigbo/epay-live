import React from "react";
import "./cart.css";
import { useCartContext } from "../Context/cart_context";
import { Link } from "react-router-dom";
// import CartColumns from "./CartColumns";
import CartItem from "./CartItem";
import CartColumns from "./CartColumn";
import CartTotal from "./CartTotal";
// import CartTotals from "./CartTotals";
const CartItems = ({data,addToCart}) => {
  const { cart, clearCart } = useCartContext();
  // console.log(cart);



  return (
    <>
      <CartColumns />
      {data.map((item) => {
        return <CartItem addToCart={addToCart} key={item.id} data={item} cart={data} />;
      })}
      <CartTotal data={data} />
      <hr />
      <div className="cart-link-con">
        <Link to="/" className="cart-remove" id="link-lin">
          Continue shopping
        </Link>
        <button type="button" className="cart-remove" onClick={() => {
          addToCart([])
        }}>
          Clear shopping cart
        </button>
        <Link to="/payment" className="cart-remove" id="link-lin">
          Checkout
        </Link>
      </div>
      {/* <CartTotals /> */}
    </>
  );
};

export default CartItems;
