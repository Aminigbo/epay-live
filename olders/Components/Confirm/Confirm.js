import React from "react";
import logo from "../../assets/icons/logo.svg";
import checkbox from "../../assets/icons/checkbox.svg";
import "./confirm.css";
import { Link } from "react-router-dom";

const Confirm = ({ state, profuct, refe }) => {
  let product = state.products.filter(e => e.product_code == profuct)[0]
  {console.log(product)}
  return (
    <article className="confirm"> 
      <div className="confirm-con">
        <h1 className="confirm-mainText confirm-header">Payment Successful</h1>
        <div className="layou1 checkbox-con">
          <img src={checkbox} alt="checkbox" className="checkbox" />
        </div>
        <p className="confirm-subText">
          Hello <span className="confirm-mainText">{state.loggedInUser.fullName}</span> , we’re glad
          to inform you that your order  <span className="confirm-mainText">{refe}</span> has been successfully placed.
        </p>
        <p className="confirm-mainText">
          Your order - {product.name} - {product.description}. will be delivered in five working days
        </p> <br/> 
        <p className="confirm-mainText confirm-header man">Management</p>
        <div className="mcl">
          <Link to="/userAdmin">
            <img src={logo} alt="logo" className="logo" /> <br/> <br/>
            <buttom>GO BACK</buttom>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Confirm;
