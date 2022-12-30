import React from "react";
import { Link } from "react-router-dom";
import DashOrder from "../DashOrderSummary/DashOrder";
import Revenue from "../Revenue/Revenue";
import "./dash.css";
import DashCashCon from "./DashCashCon";

const DashRight = () => {
  return (
    <section id="dash-right-con">
      <p id="dash-right-text">Dashboard</p>
      <div id="dash-layout">
        <DashCashCon space="dash-cash-space" cashText="Total Revenue" />
        <DashCashCon space="dash-cash-space" cashText="Total Orders" />
        <DashCashCon space="dash-cash-space" cashText="Filled Orders" />
        <DashCashCon cashText="Returned Orders" />
      </div>
      <div id="dash-rev-con">
        <Revenue />
        <DashOrder />
      </div>
      <div className="dash-btn">
        <Link to="/">
          <button className="sin-btn">Go Back Home</button>
        </Link>
      </div>
    </section>
  );
};

export default DashRight;
