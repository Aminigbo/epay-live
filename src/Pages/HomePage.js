import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import HeroScroll from "../Components/HeroScroll/HeroScroll";
import HomeNav from "../Components/Nav/HomeNav";
import BestSelling from "../Components/BestSelling/index";
import Easy from "../Components/Easy/index";
import How from "../Components/How/index";
import { connect } from 'react-redux'
import { dispProducts, addCRT, dispCartAmt } from '../redux'
import { supabase } from '../configurations';

const HomePage = ({ appState, disp_products, addToCart, addCartAmount }) => {
  const state = appState
  const new_supabase = supabase()
  const [products, setproducts] = useState([])
  const [loading, setloading] = useState(true)

  const fetcheProducts = () => {
    new_supabase
      .from("products")
      .select("*")
      .then(success => {
        // console.log(success)
        if (success.error != null) {
          setproducts([])
          disp_products([])
          setloading(false)
        } else {
          setproducts(success.data)
          disp_products(success.data)
          setloading(false)
        }

      })
      .catch(error => {
        // console.log(error)
        setproducts([])
        disp_products([])
        setloading(false)
      })
  }

  useEffect(
    () => {
      fetcheProducts()

    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );




  // window.scrollTo(0, 0);
  return (
    <>

      {loading == true && <><div style={{ position: "fixed", width: "100%", height: "100%", left: "0px", top: "0px", background: "rgb(0,0,0,0.6)", zIndex: "2000" }}></div> </>}
      {/* */}


      {/* {console.log(state)} */}
      <HomeNav className={"link-line"} state={state} />
      <HeroScroll />
      <BestSelling setfilter={true} allowSearch={true} title={"Best Selling Product"} start={0} end={8}  state={state} addToCart={addToCart} products={state.products} cartprice={addCartAmount} loading={loading} />
      <Easy singlevideo={false} />
       <BestSelling setfilter={false} allowSearch={false} title={"More products"} start={10} end={18} state={state} addToCart={addToCart} products={state.products} cartprice={addCartAmount} loading={loading} />
      <How />
      <br/>
      <br/>
       <Easy singlevideo={true} />
      <Footer />
    </>
  );
};

// export default HomePage;

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
)(HomePage)
