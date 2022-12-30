import React from "react";
import Nav from "../Components/Nav/Nav";
import setting from "../assets/icons/settings.svg";
import Footer from "../Components/Footer/Footer";
import DashBoard from "../Components/DashBord/DashBoard";

const DashBoaard = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Nav
        className="no-display"
        navImage={setting}
        className2="no-display"
        className3="no-display"
        id="no-display"
      />
      <DashBoard />
      <Footer />
    </>
  );
};

export default DashBoaard;
