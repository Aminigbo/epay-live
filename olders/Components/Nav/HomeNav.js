import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/icons/cart.svg";
import { useCartContext } from "../Context/cart_context";
import "antd/dist/antd.css";
// import "antd/antd.css";
// import "antd/lib/dropdowm/style/index.less";

import "./nav.css";
import { DownOutlined, UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const HomeNav = ({ className, state }) => {
  const [click, setClick] = useState(true);

  const openNav = () => setClick(!click);

  const history = useNavigate();
  // const { amount } = useGlobalContext();
  const { total_items } = useCartContext();
  const handleMenuClick = (e) => {
    if (e.key === "1") {
      history("/userAdmin");
    }
    if (e.key === "2") {
      history("/login");
    }

     if (e.key === "2X") {
      history("/sign");
    }


    if (e.key === "3") {
      history("/login");
    } 

  };

  const menu = (
    <Menu
      onClick={handleMenuClick}
      items={state.loggedIn == false ? [
        {
          label: "Profile",

          key: "1",
          icon: <UserOutlined />,
        },
        {
          label: "Signin",
          key: "2",
          icon: <LogoutOutlined />,
        },
         {
          label: "Signup",
          key: "2X",
          icon: <LogoutOutlined />,
        },
      ]:[
        {
          label: "Profile",

          key: "1",
          icon: <UserOutlined />,
        },
        {
          label: "Logout",
          key: "3",
          icon: <UserOutlined />,
        },
      ]}
    />
  );

  return (
    <div>
      <nav className="nav desktop-nav">
        <div className="con">
          <Link to="/">
            <img src={logo} alt="logo" className="nav-logo" />
          </Link>
        </div>
        <div className="links-con layout1 con">
          <div className="link-con">
            <p className=" home-link">
              <Link to="/" className="link">
                Home
              </Link>
            </p>
            <div className="link-line-con">
              <div className={className}></div>
            </div>
          </div>
          <div className="link-con">
            <Link to="/product" className="link">
              Products
            </Link>
            <div className="link-line-con">
              <div className="link-lines"></div>
            </div>
          </div>
        </div>
        <div className="layout1 con">
          {/* <img src={cart} alt="" className="cart" /> */}
          <Link to="/cart">
            <div className="cart-con">
              <img src={cart} alt="" className="cart" />
              <div className="cart-circle-con">
                <div className="cart-circle">
                  <p>{state.cart.length}</p>
                </div>
              </div>
            </div>
          </Link>
          {/* <Link to="/login">
          <button className="link-btn login">Login</button>
        </Link>
        <Link to="/sign">
          <button className="link-btn sign">Sign Up</button>
        </Link> */}

          <Dropdown overlay={menu}>
            <Button>
              <Space>
                {state.loggedIn == false ? <> Dashboard</> : <>{state.loggedInUser.fullName.split(" ")[0]}</>}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </div>
      </nav>
      <div className=" nav mobile-nav">
        <div className="nav-ham " onClick={openNav}>
          <GiHamburgerMenu className="ham" />
        </div>

        <Dropdown overlay={menu}>
          <Button>
            <Space>
              {state.loggedIn == false ? <>Dashboard</> : <>{state.loggedInUser.fullName.split(" ")[0]}</>}
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>

        <Link to="/cart">
          <div className="cart-con">
            <img src={cart} alt="" className="cart" />
            <div className="cart-circle-con">
              <div className="cart-circle">
                <p>{state.cart.length}</p>
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
            {state.loggedIn == false ? <>
              <Link to="/login" className="mobile-link">
                <p className="mobile-link-text">Sign in</p>
              </Link>
            </> : <>
              <Link to="/" className="mobile-link">
              <p className="mobile-link-text">Sign out</p>
              </Link>
            </>}

          </div>
        </div>

        {/* <Link to="" className="mobile-link">
          <p className="mobile-link-text">Partner With Us</p>
        </Link> */}
        {/* <div className="mobile-nav-bar">
          <div className="menu-container">
            <p className="menu">Menu</p>
            <div className="nav-ham " onClick={openNav}>
              <GrClose className="ham" />
            </div>
          </div>
          
        </div> */}
      </div>
    </div>
  );
};

export default HomeNav;
