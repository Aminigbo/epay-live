import React from "react";
import "./signNav.css";
import logo from "../../assets/images/side1.png";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <nav className="sign-nav">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
    </nav>
  );
};

export default index;
