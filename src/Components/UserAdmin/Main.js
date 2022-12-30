import React, { useEffect } from "react";
import { useState } from "react";
// const { TabPane } = Tabs;
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import Profile from "./Profile";
import Order from "./Order";
import "./useradmin.css";
import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";
const Main = ({ state, orders }) => {
  const [activeSection, setActiveSection] = useState(0);
  const sections = ["Orders List","Profile Details"];
  let navigate = useNavigate();
  const changeActiveSection = (index) => {
    setActiveSection(index);
  };

  useEffect(() => {
    if (state.loggedIn == false) return navigate("../login", { replace: true })
  })

  //   const changeTabPosition = (e) => {
  //     setTabPosition(e.target.value);
  //   };

  return (
    <>
      {console.log(orders)}
      <main id="user-ad-main">
        {console.log(state)}
        <div className="user-admin-main">
          <div className="user-admin-left">
            <div className="user-admin-avatar">
              <Avatar size={88} icon={<UserOutlined />} />
            </div>
            <p className=" user-ad-main-text">{state.loggedInUser.fullName}</p>
            <p className="user-admin-text">{state.loggedInUser.email}</p>
            {sections.map((section, index) => (
              <button
                key={index}
                index={index}
                onClick={() => changeActiveSection(index)}
                className={`admin-btn ${activeSection === index ? "admin-btn-select" : ""
                  }`}
              >
                {section}
              </button>
            ))}
            {/* <button>Profile Settings</button>
        <button>Orders List</button> */}
          </div>


          {activeSection === 0 ? <>
            {
              orders.length > 0 ?
                <>
                  <Order state={state} orders={orders} />
                </> :
                <>
                  <div id="best-result">
                    <Result
                      status="404"
                      title="No record"
                      subTitle="Sorry, you have not made any order yet."
                     
                    />
                  </div>
                </>
            }
          </> : <Profile state={state} />}
        </div>
      </main>
    </>
  );
};

export default Main;
