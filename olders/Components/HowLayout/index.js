import React from "react";
import "./hLay.css";
import laptop from "../../assets/images/chooseplan.jpg";

const index = ({ title, number, img, text }) => {
  return (
    <div className="how-lay">
      <div id="how-img-con">
        <img src={img} alt="#" id="img" />
      </div>
      <div className="mobile">
        <div className="mobile-how-img-con">
          <img src={img} alt="#" id="img" />
        </div>
      </div>
      <div className="circles circles-con">
        <div className="circle1 circles-con">
          <div className="circle2 circles-con">
            <p className="circle-text">{number}</p>
          </div>
        </div>
      </div>
      <div className="circle-text-con">
        <p className="circle-text1">{title}</p>
        <p className="circle-text2">
         {text}
        </p>
      </div>
    </div>
  );
};

export default index;
