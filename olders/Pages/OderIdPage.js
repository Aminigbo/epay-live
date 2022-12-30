import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import cart from "../assets/icons/cart.svg";
import { useFilterContext } from "../Components/Context/filter_context";
import OrderSinglePage from "../Components/UserAdmin/OrderSinglePage";
import { connect } from 'react-redux'
import { dispProducts, addCRT, dispCartAmt } from '../redux'
import { supabase } from '../configurations';


const OderIdPage = ({ appState }) => {
  const state = appState
  window.scrollTo(0, 0);
  const { id } = useParams();
  const { filtered_products: products } = useFilterContext();
  console.log(id);
  // const name = id.find(title);
  const product = state.products.find((product) => String(product.id) === id); 
  return (
    <>
      <Nav
        state={state}
        className="links-con layout1 con"
        navImage={cart}
        className2="cart-circle-con"
        className3="no-display"
        id="no-display"
      />
      <OrderSinglePage state={state} product={product} />
      {/* <Loan product={product} />
      <Brand />
      <Footer /> */}
    </>
  );
};

// export default OderIdPage;

const mapStateToProps = state => {
  return {
    appState: state.user
  }
}


const mapDispatchToProps = (dispatch, encoded) => {
  return {
    disp_products: (payload) => dispatch(dispProducts(payload)),
    addToCart: (product) => dispatch(addCRT(product)),
    addCartAmount: (amount) => dispatch(dispCartAmt(amount)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OderIdPage)
