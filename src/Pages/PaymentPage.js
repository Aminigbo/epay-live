import React, { useState, useEffect } from "react";
import Nav from "../Components/Nav/Nav";
import PayOrder from "../Components/PayOrder/index";
import cart from "../assets/icons/cart.svg";
import { useParams } from "react-router-dom";

import { supabase } from '../configurations';
import { connect } from 'react-redux'
import { dispProducts } from '../redux'

const PaymentPage = ({ appState }) => {
  const state = appState
  window.scrollTo(0, 0);
  const { id, method } = useParams();
  const [buymethod, setmethod] = useState()
  const new_supabase = supabase()

  let check = method.split("-")[1]

  const filteredProduct = state.products.filter(e => e.product_code == id)[0] 

  useEffect(() => {
    if (check == undefined) {
      // if (method == "i021TOUT") {
      //   setmethod("OUTRIGHT")
      // } else {
      //   setmethod("INSTALLMENT")
      // }
      setmethod("OUTRIGHT")
    } else {
      if (check == "CART") {
        setmethod("CART")
      } else {
        setmethod("INSTALLMENT")
      }
      // setmethod("CART")
    }
 

  }, [])
  return (
    <> 
      <Nav
        state={state.cart}
        className="links-con layout1 con"
        navImage={cart}
        className2="cart-circle-con"
        className3="no-display"
        id="no-display"
      />
      <PayOrder method={buymethod} params={method} product={filteredProduct} state={state} />
    </>
  );
};



// export default ProductIdPage;
const mapStateToProps = state => {
  return {
    appState: state.user
  }
}


const mapDispatchToProps = (dispatch, encoded) => {
  return {
    disp_products: (payload) => dispatch(dispProducts(payload)),
    // dispjackpot: (jackpot) => dispatch(disp_jackpots(jackpot)),
    // disp_stage_match: (stagged) => dispatch(stage_match(stagged)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaymentPage)
