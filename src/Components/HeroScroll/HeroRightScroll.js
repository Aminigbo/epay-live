import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import heroImage from "../../assets/images/color-full.png";

const HeroRightScroll = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            // partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            // partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            // partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
        }
    }

    return (
        <div className="hero-right-carousel"><Carousel responsive={responsive} infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000} className="hero-right-carousel-main">
            <div className="hero-right-scroll-img-div">
                <img src={heroImage} alt="#" />
            </div>
            <div className="hero-right-scroll-img-div">
                <img src={heroImage} alt="#" />
            </div>
            <div className="hero-right-scroll-img-div">
                <img src={heroImage} alt="#" />
            </div>
            <div className="hero-right-scroll-img-div">
                <img src={heroImage} alt="#" />
            </div>
        </Carousel></div>
    )
}

export default HeroRightScroll