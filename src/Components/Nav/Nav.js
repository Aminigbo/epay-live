import React, { useEffect, useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import search from "../../assets/icons/search.svg";
import love from "../../assets/icons/love.svg";
import picture from "../../assets/images/picture.png";
import { useFilterContext } from "../Context/filter_context";
import { useCartContext } from "../Context/cart_context";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const Nav = ({ className, className2, className3, id, navImage, state }) => {
  const [click, setClick] = useState(true);

  const openNav = () => setClick(!click);

  // const { total_items } = useCartContext();
  const {
    filters: { text },
    updateFilters,
  } = useFilterContext();
  useEffect(
    () => {
      updateFilters({ target: { name: "category", textContent: "all" } });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <div>
      <div className="nav desktop-nav">
        <div className="con">
          <Link to="/">
            <img src={logo} alt="logo" className="nav-logo" />
          </Link>
        </div>

        <div className={className}>
          <div className="link-con">
            <p className=" home-link">
              <Link to="/" className="link">
                Home
              </Link>
            </p>
            <div className="link-line-con">
              <div className="link-lines"></div>
            </div>
          </div>
          <div className="link-con">
            <Link to="/product" className="link">
              Products
            </Link>
            <div id={id} className="link-line-con">
              <div className="link-line"></div>
            </div>
          </div>
        </div>

        <div className="layout1 con">
          <div className={className3}>
            {/* <form className="best-form" onSubmit={(e) => e.preventDefault()}>
              <div className="search-con">
                <input
                  type="text"
                  name="text"
                  value={text}
                  onChange={updateFilters}
                  placeholder="Search product"
                  className="best-input"
                />
                <img src={search} alt="search" className="search" />
              </div>
            </form> */}
          </div>
          {/* <img src={love} alt="#" className="love" /> */}
          {/* <Link to="/cart">
            <div className="cart-con">
              <img src={navImage} alt="" className="cart" />
              <div className={className2}>
                <div className="cart-circle">
                  <p>{state == undefined ? 0: state.length}</p>
                </div>
              </div>
            </div>
          </Link> */}
          {/* <div className="picture-con">
            <img src={picture} alt="" id="picture" />
          </div> */}
        </div>
      </div>
      <div className=" nav mobile-nav">
        <div className="nav-ham " onClick={openNav}>
          <GiHamburgerMenu className="ham" />
        </div>
        <div>
          <div className={className3}>
            {/* <form className="best-form" onSubmit={(e) => e.preventDefault()}>
              <div className="search-con">
                <input
                  type="text"
                  name="text"
                  value={text}
                  onChange={updateFilters}
                  placeholder="Search product"
                  className="best-input"
                />
                <img src={search} alt="search" className="search" />
              </div>
            </form> */}
          </div>
        </div> 
        <Link to="/cart">
          <div className="cart-con">
            <img src={navImage} alt="" className="cart" />
            <div className={className2}>
              <div className="cart-circle">
                <p>{state == undefined ? 0: state.length}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className={click ? "side-nav" : "open-sidenav"}>
        <div className="side-close">
          <div className="nav-ham " onClick={openNav}>
            <GrClose className="ham" />
          </div>
        </div>
        <div className="side-link">
          <div>
            <Link to="/" className="mobile-link">
              <p className="mobile-link-text">Home</p>
            </Link>
            <Link to="/product" className="mobile-link">
              <p className="mobile-link-text">Product</p>
            </Link>
            <Link to="/cart" className="mobile-link">
              <p className="mobile-link-text">Cart</p>
            </Link>
            <Link to="/userAdmin" className="mobile-link">
              <p className="mobile-link-text">My Account</p>
            </Link>
            <Link to="/" className="mobile-link">
              <p className="mobile-link-text">Log out</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
