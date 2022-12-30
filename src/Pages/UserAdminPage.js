import React, { useEffect, useState } from "react";
import HomeNav from "../Components/Nav/HomeNav";
import Main from "../Components/UserAdmin/Main";
import { supabase } from '../configurations';
import { connect } from 'react-redux'
import { dispProducts } from '../redux'


const UserAdminPage = ({ appState }) => {
  const new_supabase = supabase()
  window.scrollTo(0, 0);
  const state = appState

  const [orders, setproducts] = useState([])

  const [loading, setloading] = useState(true)

  const fetcheProducts = () => {
    new_supabase
      .from("orders")
      .select("*")
      .eq('userEmail', state.loggedInUser.email)
      .then(success => {
        console.log(success)
        if (success.error != null) {
          setproducts([])
          setloading(false)
        } else {
          setproducts(success.data)
          setloading(false)
        }

      })
      .catch(error => {
        console.log(error)
        setproducts([])
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




  return (
    <>
      {loading == true && <><div style={{ position: "fixed", width: "100%", height: "100%", left: "0px", top: "0px", background: "rgb(0,0,0,0.6)", zIndex: "2000" }}></div> </>}
      {console.log(orders)}
      <HomeNav state={state} className={"no-display"} />
      {loading != true && <> <Main state={state} orders={orders} /></>}

    </>
  );
};

// export default UserAdminPage;


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
)(UserAdminPage)