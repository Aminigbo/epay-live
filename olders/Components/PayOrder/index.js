import React from "react";
import Payment from "../Payment/index";
import Order from "../OrderSummary/index";
import "./payOrder.css";
import { Link } from "react-router-dom";
import { PaystackButton, PaystackConsumer } from "react-paystack";


const index = ({ method, product, state, params }) => {


 
  return (
    <main id="payOrder-con">
      {/* {console.log(state)} */}
      <div id="paymentandorder">
        <Payment method={method} product={product} state={state} />
        <Order method={method} params={params} product={product} state={state} />
      </div>
     
    </main>
  );
};

export default index;
