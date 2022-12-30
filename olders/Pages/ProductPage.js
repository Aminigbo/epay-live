import React from "react";
import Nav from "../Components/Nav/Nav";
import Footer from "../Components/Footer/Footer";
import cart from "../assets/icons/cart.svg";
import Products from "../Components/ProductCon/Products";

const ProductIdPage = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Nav
        className="links-con layout1 con"
        navImage={cart}
        className2="cart-circle-con"
      />
      <Products />

      <Footer />
    </>
  );
};

export default ProductIdPage;
