import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import heroImage from "../../assets/images/slide7.jpg";
import heroImage1 from "../../assets/images/slide6.jpg";
import heroImage2 from "../../assets/images/slide5.jpg";
import heroImage3 from "../../assets/images/slide4.jpg";
import heroImage4 from "../../assets/images/slide3.jpg";
import heroImage5 from "../../assets/images/epay fashion copy.jpg";
import heroImage6 from "../../assets/images/slide1.jpg";
import heroImage7 from "../../assets/images/awuf.jpg";
import footwears from "../../assets/images/footwears.png";
import toy from "../../assets/images/kids_toys.png";

// kids_toys
import HeroRightScroll from "./HeroRightScroll";
import "./HeroScroll.css";

const HeroScroll = () => {
  return (
    <section className="hero-scroll">
      <div className="scroll-con">
        <Carousel infiniteLoop={true} autoPlay={true}>
          <Link to="/product/kitchen equipment" className="scroll-img-div">
            <img src={heroImage7} alt="#" />
          </Link>
          <Link to="/product/Automobile" className="scroll-img-div">
            <img src={heroImage4} alt="#" />
          </Link>
          <Link to="/product/Handsets" className="scroll-img-div">
            <img src={heroImage1} alt="#" />
          </Link>
          <Link to="/product/washing machine" className="scroll-img-div">
            <img src={heroImage2} alt="#" />
          </Link>
          <Link to="/product/Electronics" className="scroll-img-div">
            <img src={heroImage3} alt="#" />
          </Link>
          <Link to="/product/Electronics" className="scroll-img-div">
            <img src={heroImage6} alt="#" />
          </Link>
        </Carousel>
      </div>
      <div className="hero-right">
        <div className="hero-no-scroll-con1">
          <Link to="/product/Handsets" className="hero-no-scroll-single-con">
            <img src={heroImage} alt="#" />
            {/* <iframe className='video'
              style={{ width: "100%", height: "100%" }}
              title='Youtube player'
              sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
              src={`https://youtube.com/embed/${'wAR3nSb4fsg'}?autoplay=0`}>
            </iframe> */}
          </Link>
          <Link to="/product/Fashion" className="hero-no-scroll-single-con">
            <img src={heroImage5} alt="#" />
            {/* <iframe className='video'
              style={{ width: "100%", height: "100%" }}
              title='Youtube player'
              sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
              src={`https://youtube.com/embed/${'Q-el80rJ9Xc'}?autoplay=0`}>
            </iframe> */}
          </Link>
          <Link to="/product/Footwear" className="hero-no-scroll-single-con">
            <img src={footwears} alt="#" />
            {/* <iframe className='video'
              style={{ width: "100%", height: "100%" }}
              title='Youtube player'
              sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
              src={`https://youtube.com/embed/${'mjFax6dKHo8'}?autoplay=0`}>
            </iframe> */}
          </Link>
          <Link to="/product/Kids" className="hero-no-scroll-single-con">
            <img src={toy} alt="#" />
            {/* <iframe className='video'
              style={{ width: "100%", height: "100%" }}
              title='Youtube player'
              sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
              src={`https://youtube.com/embed/${'wAR3nSb4fsg'}?autoplay=0`}>
            </iframe> */}
          </Link>
        </div>
        <div className="hero-no-scroll-con2" style={{ textAlign: "center" }}>
          <img src={heroImage} alt="#" style={{ display: "inline-block", width: "45%", margin: "2%" }} />
          <img src={heroImage5} alt="#" style={{ display: "inline-block", width: "45%", margin: "2%" }} />
          <img src={footwears} alt="#" style={{ display: "inline-block", width: "45%", margin: "2%" }} />
          <img src={toy} alt="#" style={{ display: "inline-block", width: "45%", margin: "2%" }} />

        </div>
      </div>
    </section>
  );
};


export default HeroScroll;
