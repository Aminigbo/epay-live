import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Nav from "../Components/Nav/Nav";
import Single from "../Components/Single/index";
import Loan from "../Components/Loan/index";
import Footer from "../Components/Footer/Footer";
import Brand from "../Components/Brands/index";
import cart from "../assets/icons/cart.svg";
import { useFilterContext } from "../Components/Context/filter_context";
import { supabase } from '../configurations';

import { connect } from 'react-redux'
import { dispProducts } from '../redux'


const ProductIdPage = ({ appState }) => {
  window.scrollTo(0, 0);
  const new_supabase = supabase()
  const { id } = useParams();
  const state = appState
  const [loading, setloading] = useState(true)
  const [filteredProduct, setfilteredProduct] = useState({})
  const [payload, setpayload] = useState(null)
  useEffect(() => {
    if (id.split("-")[1] == undefined) {
      setfilteredProduct(state.products.filter(e => e.product_code == id)[0])
      setloading(false)
    } else {
      setloading(true)
      new_supabase
        .from("orders")
        .select("*")
        .eq('userEmail', state.loggedInUser.email)
        .eq('productID', id.split("-")[0])
        .then(success => {
          setfilteredProduct(success.body[0].product)
          setpayload(success.body[0])
          console.log(success.body[0])
          setloading(false)
        })
        .catch(error => {
          setloading(false)
        })


    }
  }, [])

  return (
    <>
      {loading == true && <><div style={{ position: "fixed", width: "100%", height: "100%", left: "0px", top: "0px", background: "rgb(0,0,0,0.6)", zIndex: "2000" }}></div> </>}
      {/* */}
      {/* {console.log(id.split("-"))} */}
      {/* {console.log(payload)} */}
      <Nav
        state={state.cart}
        className="links-con layout1 con"
        navImage={cart}
        className2="cart-circle-con"
        className3="no-display"
        id="no-display"
      />
      {loading == false && <> <Single product={filteredProduct} payload={payload} /></>}
      <Loan product={filteredProduct} payload={payload} />
      {payload == null && <Brand product={state.products} />}
      <Footer />
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
)(ProductIdPage)



