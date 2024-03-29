import React from "react";
import { Link } from "react-router-dom";
import star from "../../assets/icons/star.svg";
import AddToCart from "../AddToCart/AddToCart";
import { useGlobalContext } from "../Context/context";
import "./laptop.css";
// import { useGlobalContext } from "../";

const Laptop = ({ product}) => {
  const { increase } = useGlobalContext();
  // const {  title:title, price:price, category:category, } = product;

  let off ='';
  if (product.price > 4001 && product.price < 50001) {
    off = 0.11
  } else if (product.price > 50000 && product.price < 150001) {
    off = 0.3
  }else if (product.price > 150000 && product.price < 300001 || product.price > 300001) {
    off = 0.45
  } 
  
  return product.length < 1 ? (
    <div>
      Loading...
    </div>

  ) : (
    <>
      <div id="laptop-main-con" >
        <Link to={`/view-products/${product.product_code}`}>
          <div id="con" style={{padding:" "}}>
              <div id="lap-img-con" style={{
              border:"2px solid #ff1f00"
            }}>
              <img src={'https://jdptlyjoqfaypjklxsgv.supabase.co/storage/v1/object/public/images/' + product.images[0]} alt="laptop" className="laptop" />
            </div>
          </div>
        </Link>
        <div className="apple">
          {/* <b id="apple">{product.category}</b> */}
          <Link to={`/view-products/${product.product_code}`} id="mac" style={{fontSize:"14px",color:"lightgrey"}}>
            {product.name}
          </Link>
          <div>
            <img src={star} alt="star" id="star" />
            <img src={star} alt="star" id="star" />
            <img src={star} alt="star" id="star" />
            <img src={star} alt="star" id="star" />
            <img src={star} alt="star" id="star" />
          </div>
          <p id="starting-price" style={{color:"lightgrey"}}>CGI price</p>
            <div className="price-btn">
              <br/>
            <div id="price-con">
              {/* <p  style={{color:"white"}}>NG N </p> */}
              <p  style={{color:"white"}}  className="price">NGN {product.price*off}</p>
            </div>
            <Link to={`/view-products/${product.product_code}`}>
              <button id="buy-btn" onClick={() => {
                // state.cart.push(product)
                // addToCart(state.cart)
                //   let newPrice = parseInt(state.CRTamt) + parseInt(product.price); 
                //   cartPrice(newPrice)
              }}>
                <AddToCart product={product} />
              </button>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default Laptop;
