import React from "react";
import PictureLayout from "../SPicLayout/index";
import { Link } from "react-router-dom";

const OrderSinglePage = ({ product, state }) => {
  return (
    <section id="single-con">
      <div className="single-main-text-con">
        <h1 className="single-main-text">{product.title}</h1>
      </div>
      <div>
        {console.log(product)}
        <PictureLayout image={product.images} price={product.price} />
      </div>

      <div className="single-main-text-con second-con">
        <h1 className="single-main-text">{product.title}</h1>
      </div>
      <div>
        <p className="order-main-text">Total amount: ${product.price}</p>
        <p className="order-main-text">Amount Paid : $30000</p>
        <p className="order-main-text">Loan Duration : 3 months</p>
        <p className="order-main-text">Amount/Months: $30000</p>
        <p className="order-main-text">Next Due Date : 15 September 2022</p>
      </div>
      <div className="sin-btn-con">
        <Link to="/userAdmin">
          <button className="sin-btn">Back to dashboard</button>
        </Link>
      </div>
    </section>
  );
};

export default OrderSinglePage;
