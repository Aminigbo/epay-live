import React, { useState } from "react";
import "./dash.css";
import user from "../../assets/icons/user.svg";
import overview from "../../assets/icons/overview.svg";
import userList from "../../assets/icons/user-list.svg";
import report from "../../assets/icons/report.svg";
import security from "../../assets/icons/dash-security.svg";
import message from "../../assets/icons/message.svg";
import logout from "../../assets/icons/logout.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const DashLeft = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [click, setClick] = useState(true);

  const openAdminNav = () => setClick(!click);
  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <section id="dash-left-con">
        <p id="dash-left-header-txt">ADMIN MANAGER</p>
        <div className="dash-left-main-con">
          <p id="dash-left-text">Dashboard</p>
        </div>

        <div className="pad-con">
          <div className="users-con ">
            <img src={user} alt="#" id="dash-left-logo" />
            <p className="dash-left-user-text">Users</p>
          </div>
          <div id="dash-left-sub-main-con">
            <div className=" sub-con colored-sub-con" onClick={handleClick}>
              <img src={overview} alt="#" id="dash-left-logo" />
              <p className="dash-left-sub-text">Overview</p>
            </div>
            <div className="sub-con ">
              <img src={userList} alt="#" id="dash-left-logo" />
              <p className="dash-left-sub-text">User Lists</p>
            </div>
          </div>
        </div>
        <div className="pad-con">
          <div className=" users-con">
            <img src={report} alt="#" id="dash-left-logo" />
            <p className="dash-left-user-text">Reports</p>
          </div>
        </div>
        <div className="pad-con2">
          <div className=" users-con report-con ">
            <img src={security} alt="#" id="dash-left-logo" />
            <p className="dash-left-user-text">Security</p>
          </div>
          <div className=" users-con report-con ">
            <img src={message} alt="#" id="dash-left-logo" />
            <p className="dash-left-user-text">Messages</p>
          </div>
          <div className=" users-con report-con ">
            <img src={logout} alt="#" id="dash-left-logo" />
            <p className="dash-left-user-text">Logout</p>
          </div>
        </div>
      </section>
      <div className="mobile-admin">
        <div>
          <div className="nav-ham ">
            <GiHamburgerMenu className="ham" onClick={openAdminNav} />
          </div>
        </div>
      </div>
      <div className={click ? "side-admin-nav" : "open-side-admin-nav"}>
        <div className="admin-side-close">
          <div className="ham-admin " onClick={openAdminNav}>
            <GrClose className="ham " />
          </div>
        </div>
        <div className="side-admin-link">
          <p id="dash-left-header-txt">ADMIN MANAGER</p>
          <div className="dash-left-main-con">
            <p id="dash-left-text">Dashboard</p>
          </div>

          <div className="side-admin-pad-con">
            <div className="users-con ">
              <img src={user} alt="#" id="dash-left-logo" />
              <p className="dash-left-user-text">Users</p>
            </div>
            <div id="dash-left-sub-main-con">
              <div className=" sub-con colored-sub-con" onClick={handleClick}>
                <img src={overview} alt="#" id="dash-left-logo" />
                <p className="dash-left-sub-text">Overview</p>
              </div>
              <div className="sub-con ">
                <img src={userList} alt="#" id="dash-left-logo" />
                <p className="dash-left-sub-text">User Lists</p>
              </div>
            </div>
          </div>
          <div className="side-admin-pad-con">
            <div className=" users-con">
              <img src={report} alt="#" id="dash-left-logo" />
              <p className="dash-left-user-text">Reports</p>
            </div>
          </div>
          <div className="side-admin-pad-con2">
            <div className=" users-con report-con ">
              <img src={security} alt="#" id="dash-left-logo" />
              <p className="dash-left-user-text">Security</p>
            </div>
            <div className=" users-con report-con ">
              <img src={message} alt="#" id="dash-left-logo" />
              <p className="dash-left-user-text">Messages</p>
            </div>
            <div className=" users-con report-con ">
              <img src={logout} alt="#" id="dash-left-logo" />
              <p className="dash-left-user-text">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashLeft;
