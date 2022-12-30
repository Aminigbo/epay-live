import React from "react";
// import styled from "styled-components";
// import { formatPrice } from "../utils/helpers";
// import AmountButtons from "./AmountButtons";
// import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../Context/cart_context";
import "./cart.css";
const CartItem = ({ data, addToCart, cart }) => {
  const removeItem = (id) => {
    let index = cart.findIndex(e => e.id == id)
    cart.splice(index,1)
    console.log(cart)
    addToCart(cart)
  }

  return (
    <div className="content">
      <div className="cart-product-col">
        <div className="cart-img-con">
          <img src={'https://jdptlyjoqfaypjklxsgv.supabase.co/storage/v1/object/public/images/' + data.images[0]} alt={data.description} className="cart-product-img" />
        </div>
        <div className="cart-product-text">
          <p>{data.name}</p>
          <p>Category : {data.category}</p>
          <p>Price : NGN {data.price}</p>
          <button onClick={() => removeItem(data.id)} className="cart-remove">
            Remove
          </button>
        </div>
      </div>

      <div className="cart-amount-btn-con">
        {/* <button onClick={decrease} className="cart-amount-btn dec">
          -
        </button> */}
        <p>{data.quantity}</p>
        {/* <button onClick={increase} className="cart-amount-btn inc">
          +
        </button> */}
      </div>

      <div>
        <p>NGN {data.price * data.quantity}</p>
      </div>

      {/* <div className="title">
        <img src={img} alt={title} />
        <div>
          <h5 className="name">{title}</h5>
          <h5 className="name">{category}</h5>
          <h5 className="name">{price}</h5> */}
      {/* <p className="color">
            color :
            <span style={{ background: color }} />
          </p> */}
      {/* <h5 className="price-small">{formatPrice(price)}</h5> */}
      {/* </div>
      </div> */}
      {/* <h5 className="price">{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className="subtotal">{formatPrice(price * amount)}</h5>
      <button className="remove-btn" onClick={() => removeItem(id)}>
        <FaTrash />
      </button> */}
    </div>
  );
};

export default CartItem;
