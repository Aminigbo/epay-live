import React from "react";
import DashLeft from "./DashLeft";
import DashRight from "./DashRight";
import "./dash.css";

const DashBoard = () => {
  return (
    <main id="dash-main-con">
      <DashLeft />
      <DashRight />
    </main>
  );
};

export default DashBoard;
