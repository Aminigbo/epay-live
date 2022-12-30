import React from "react";
import "./dash.css";
import cash from "../../assets/icons/cash.svg";

const DashCashCon = ({ space, cashText }) => {
  return (
    <div id="dash-cash-con" className={space}>
      <p id="dash-cash-header">{cashText}</p>
      <img src={cash} alt="#" id="dash-cash-logo" />
      <p id="dash-cash-text">$40,000</p>
    </div>
  );
};

export default DashCashCon;
