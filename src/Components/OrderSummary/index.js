import React from "react";
import "./order.css";
import { Link } from "react-router-dom";
import { PaystackButton, PaystackConsumer } from "react-paystack";


const index = ({ method, product, params, state }) => {
  let month = params.split("-")[1];
  let firstpay = product.price * 0.3







  return (
    <>
      {method == "INSTALLMENT" && <>
        <div id="order-con">
          {console.log(params)}
          <p id="payment-header" className="order-main-text">
            Order Summary
          </p>
          <div id="order-line"></div>
          <p id="order-text-1">{product.name}</p>
          <div id="order-laptop-type">
            <p id="order-laptop-text">
              {product.description}
            </p>
          </div>
          <div id="order-line"></div>
          <div id="order-free-con">
            <p id="order-free-text">Delivery charges apply in all CGI deals</p>
          </div>
          <div className="layout1 order-total-con">
            <p id="order-laptop-amount">First payment</p>
            <p id="order-laptop-amount" className="order-red">
              NGN {firstpay}<small>.00</small>
            </p>
          </div>
          <div id="order-line"></div>
          <p id="payment-header" className="order-loan">
            GCi Summary
          </p>
          <div id="order-line"></div>
          <p id="order-laptop-text" className="one-month">
            You have a loan balance of {product.price - firstpay} spread across {month}-month with no interest rate.
          </p>
          <div className="layout1 order-total-con">
            <p id="order-laptop-text">Amount per month</p>
            <p id="order-laptop-amount" className="order-red">
              NGN {Math.floor((product.price - firstpay) / month)}
            </p>
          </div>

          <br />

          <div id="con">
            <div id="lap-img-con">
              <img src={'https://jdptlyjoqfaypjklxsgv.supabase.co/storage/v1/object/public/images/' + product.images[0]} alt="laptop" className="laptop" />
            </div>
          </div>
          <br/>
          <div style={{textAlign:"center"}}>
            <a
              href={'base'}
              download
              rel="noopener noreferrer"
            >
              Download Agreement
            </a>
          </div>
        </div>
      </>}

      {method == "OUTRIGHT" && <>
        <div id="order-con">
          {console.log(product)}
          <p id="payment-header" className="order-main-text">
            Order Summary
          </p>
          <div id="order-line"></div>
          <p id="order-text-1">{product.name}</p>
          <div id="order-laptop-type">
            <p id="order-laptop-text">
              {product.description}
            </p>
            <p id="order-laptop-amount" className="order-amount">
              #{product.price}<small>.00</small>
            </p>
          </div>
          <div id="order-line"></div>
          <div id="order-free-con">
            <p id="order-free-text">Delivery charges apply in all CGI deals</p>
          </div>
          <div className="layout1 order-total-con">
            <p id="order-laptop-amount">Total</p>
            <p id="order-laptop-amount" className="order-red">
              <b>
                #{product.price}<small>.00</small>
              </b>
            </p>
          </div>

          <br />

          <div id="con">
            <div id="lap-img-con">
              <img src={'https://jdptlyjoqfaypjklxsgv.supabase.co/storage/v1/object/public/images/' + product.images[0]} alt="laptop" className="laptop" />
            </div>
          </div>



        </div>
      </>}
    </>

  );
};

export default index;
