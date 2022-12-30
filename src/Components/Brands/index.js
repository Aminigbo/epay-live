import React from "react";
import arrow from "../../assets/icons/arrow.svg";
import BlackArrow from "../../assets/icons/black-arrow.svg";
import "./brand.css";
import { Link } from "react-router-dom";
import AllItems from "../AllItems/AllItems";
import { useGlobalContext } from "../Context/context";

const Index = ({ product }) => {
  // const { laptopItems } = useGlobalContext();
  return (
    <section id="brand-con">
      <p className="brand-title">Brands you may like to add</p>
      <div id="brand-grid-arrow">
        <div className="brand-height">
          <AllItems items={product} />
        </div>
        {/* <div className="brand-arrow-con">
          <Link to="/product" id="link-lin">
            <div className="arrow-con">
              <img src={BlackArrow} alt="" id="arrow" />
            </div>
          </Link>
        </div> */}
      </div>
      <div className="brand-view-con">
        <div className="view-main">
          <p style={{cursor:'pointer'}} className="view-text">View all</p>
          {/* <img src={arrow} alt="#" id="arrow" /> */}
        </div>
      </div>
    </section>
  );
};

export default Index;
