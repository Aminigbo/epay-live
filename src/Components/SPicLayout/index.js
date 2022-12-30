import React from "react";
import "./picLay.css";
import ColorFull from "../../assets/images/color-full.png";
import side1 from "../../assets/images/side1.png";
import side2 from "../../assets/images/side2.png";
import greenLove from "../../assets/icons/green-love.svg";

const index = ({ price, image }) => {
  return (
    <div className="pic-layout">
      {console.log(image)}
      <div id="large">
        <div id="pl">
          <div className="layout1 sl-price-con">
            <div id="price-con">
              {/* <p>#</p> */}
              <p className="price">NGN {price}</p> 
            </div>
            <img src={greenLove} alt="#" className="love" />
          </div>
          <div className="large-pic">
            <img src={'https://jdptlyjoqfaypjklxsgv.supabase.co/storage/v1/object/public/images/' + image[0]} alt="#" className="pic" />
          </div>
        </div>
      </div>
      <div id="small">
        {image[1] ? <>
          <div id="pl2">
            <div className="small-pic">
              <img src={'https://jdptlyjoqfaypjklxsgv.supabase.co/storage/v1/object/public/images/' + image[1]} alt="#" className="pic" />
            </div>
          </div></>:<>
          <div id="pl2">
            <div className="small-pic">
              <img src={'https://jdptlyjoqfaypjklxsgv.supabase.co/storage/v1/object/public/images/' + image[0]} alt="#" className="pic" />
            </div>
          </div></>}
        {image[2] ?<>
          <div id="pl2">
            <div className="small-pic">
              <img src={'https://jdptlyjoqfaypjklxsgv.supabase.co/storage/v1/object/public/images/' + image[1]} alt="#" className="pic" />
            </div>
          </div></>: <>
          <div id="pl2" className="side-sp">
            <div className="small-pic">
              <img src={'https://jdptlyjoqfaypjklxsgv.supabase.co/storage/v1/object/public/images/' + image[0]} alt="#" className="pic" />
            </div>
          </div></>}
      </div>
    </div>
  );
};

export default index;
