import React from "react";
import { Link } from "react-router-dom";
import "./loan.css";

const index = ({ months, payAmounts, product, label }) => {
  return (
    <div id="loan-con">
      <div id="loan-up">
        <p>{months}</p>
      </div>
      <div id="loan-down">
        <p><b>pay NGN {payAmounts}.<small>00</small></b> every month</p>
        <div id="loan-btn-con">
          {label == "Select" ? <>
            <Link to={`/payment/${product}/i021Ts-${months.split("m")[0]}`}> <button id="loan-btn">{label}</button></Link>
          </> : <>
            <b to={`/payment/${product}/i021Ts-${months.split("m")[0]}`}> <button id="loan-btn">{label}</button></b>
          </>}
        </div>
      </div>
    </div>
  );
};

export default index;
