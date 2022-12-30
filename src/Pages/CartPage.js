import React from "react";
import { useCartContext } from "../Components/Context/cart_context";
import CartContent from "../Components/CartContent/CartContent";
import Nav from "../Components/Nav/Nav";
import cartIcon from "../assets/icons/cart.svg";
import { Button, Result } from "antd";
import "../Components/CartContent/cart.css";
import { connect } from 'react-redux'
import { dispProducts, addCRT } from '../redux'
import { supabase } from '../configurations';


const CartPage = ({ appState,addToCart }) => {
  const state = appState
  window.scrollTo(0, 0);
  const cart = state.cart;
  console.log(cart);
  if (cart.length < 1) {
    return (
      <>
        <Nav
          className="links-con layout1 con"
          navImage={cartIcon}
          className2="cart-circle-con"
          className3="no-display"
          id="no-display"
        />
        <div className="empty">
          <Result
            status="404"
            title="Your cart is empty"
            // subTitle="Sorry, you are not authorized to access this page."
            extra={
              <a href="/product">
                <Button type="primary" className="cart-remove">
                  fill it
                </Button>
              </a>
            }
          />
        </div>
      </>
    );
  }
  return (
    <>
      <Nav
        state={cart}
        className="links-con layout1 con"
        navImage={cartIcon}
        className2="cart-circle-con"
        className3="no-display"
        id="no-display"
      />
      <main>
        {/* <PageHero title="cart" /> */}
        {/* <Wrapper className="page"> */}
        <CartContent addToCart={addToCart} data={cart}></CartContent>
        {/* </Wrapper> */}
      </main>
    </>
  );
};

// export default CartPage;
const mapStateToProps = state => {
  return {
    appState: state.user
  }
}


const mapDispatchToProps = (dispatch, encoded) => {
  return {
    disp_products: (payload) => dispatch(dispProducts(payload)),
    addToCart: (product) => dispatch(addCRT(product)),
    // disp_stage_match: (stagged) => dispatch(stage_match(stagged)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage)
