import React from "react";
import "./layout.css";
import gmail from "../../assets/icons/gmail.svg";
import facebook from "../../assets/icons/facebook.svg";
import { Link } from "react-router-dom";

const Layout = ({
  headerText,
  gmailText,
  facebookText,
  footerText1,
  footerText2,
  image,
  link,
  children,
}) => {
  return (
    <section className="layout layout3" style={{display:" "}}>
      <div className="left-con"  style={{background:" ",display:"inline-block"}}>
        <p className="layout-text">{headerText}</p>
        <div className="layout-main-con" style={{background:" "}}>
          {/* <div className="gmail-facebook layout1" style={{display:"none"}} >
            <div className="gmail layout2">
              <img src={gmail} alt="gmail" className="sign-icon" />
              <p className="text">{gmailText}</p>
            </div>
            <div className="facebook layout2">
              <img src={facebook} alt="facebook" className="sign-icon" />
              <p className="text">{facebookText}</p>
            </div>
          </div> */}
          {/* <div className="or-con layout1">
            <div className="left-line"></div>
            <p className="or-text">OR</p>
            <div className="right-line"></div>
          </div> */}
          {children}

          <p className="alt">
            {footerText1}
            <span>
              <Link to={link} className="log">
                {footerText2}
              </Link>
            </span>
          </p>
        </div>
      </div>
      <div  className="right-con"> 
        <img src={image} alt="#" className="layout-img" />
      </div>
    </section>
  );
};

export default Layout;
