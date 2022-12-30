import React from "react";
import "./easy.css";
import laptop from "../../assets/images/small-laptop.png";
import coloredLaptop from "../../assets/images/slide2.jpg";
import { Link } from "react-router-dom";

import heroImage5 from "../../assets/images/awufthisseason.png";
import heroImage6 from "../../assets/images/allyouneed.png";

const index = ({ singlevideo }) => {
  return (
    <section className="easy-con easy">


      {singlevideo == true ? <>
        <div className="easy-up  ems">
          <div className="easy-img-con1">
            <div className="easy-largeX">
              {/* <img src={laptop} alt="" className="easy-img" /> */}
              <iframe className='video'
                style={{ width: "100%", height: "100%" }}
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={`https://youtube.com/embed/${'mjFax6dKHo8'}?autoplay=0`}>
              </iframe>
            </div>

          </div>
        </div>
      </> : <>
        <div className="easy-up  ems">
          <div className="easy-img-con1">
            <div className="easy-large">
              {/* <img src={laptop} alt="" className="easy-img" /> */}
              <iframe className='video'
                style={{ width: "100%", height: "100%" }}
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={`https://youtube.com/embed/${'mjFax6dKHo8'}?autoplay=0`}>
              </iframe>
            </div>
            <div className="easy-big">
              <img src={heroImage5} alt="" className="easy-img" />
            </div>
          </div>

          <div className="easy-img-con2 ">
            <div className="easy-small">
              <img src={heroImage6} alt="" className="easy-img" />
            </div>
            <div className="easy-largest">
              <img src={coloredLaptop} alt="" className="easy-img" />
              {/* <iframe className='video'
              style={{ width: "100%", height: "100%" }}
              title='Youtube player'
              sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
              src={`https://youtube.com/embed/${'wAR3nSb4fsg'}?autoplay=0`}>
            </iframe> */}
            </div>
          </div>
        </div>
      </>}
      <div className="easy-down ems">
        <div className="easy-right">
          <p className="easy-text1">
            EPay your No.1 pay small small company.
          </p>
          <p className="easy-text">
            Just a little deposit,
            we give item(s) to you while you spread balance for many months.
            No collateral, No Atm Pin/code required, No Delays
          </p>
          <Link to="/product">
            <button style={{ cursor: "pointer" }} className="easy-btn">Search Products</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default index;
