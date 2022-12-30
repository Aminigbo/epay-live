import React from "react";
import HowLayout from "../HowLayout/index";
import "./How.css";

import laptop from "../../assets/images/choose_plan.png";
import laptop2 from "../../assets/images/submit_details.png";
import laptop3 from "../../assets/images/buynow.jpg";



const index = () => {
  return (
    <section className="how">
      <div className="how-header">
        <p>How It Works</p>
      </div>
      <div className="how-con">
        <HowLayout text={"Ours plans are flexible and best suited for you"} number="1" img={laptop} title="Choose loan plan" />
        <HowLayout text={"Provide us confirmation that can help process your request"} number="2" img={laptop2} title="Submit your details" />
        <HowLayout text={"Yes! It's that easy. With few checks, you get your dream product"} number="3" img={laptop3} title="Finally, buy" />
      </div>
      <div className="tablet-howcon">
        <div className="tablet-how-con1">
          <HowLayout text={"Ours plans are flexible and best suited for you"} number="1" title="Choose loan plan" />
          <HowLayout text={"Provide us confirmation that can help process your request"} number="2" title="Submit your details" />
        </div>
        <div className="tablet-how-con2">
          <div>
            <HowLayout text={"Yes! It's that easy. With few checks, you get your dream product"} number="3" title="Finally, buy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
