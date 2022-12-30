import React from "react";
import Confirm from "../Components/Confirm/Confirm";
import { useParams } from "react-router-dom";

import { supabase } from '../configurations';
import { connect } from 'react-redux'
import { dispProducts } from '../redux'


const Confirmation = ({appState}) => {
const state = appState
  const { id, ref } = useParams();
  window.scrollTo(0, 0);
  return (
    <main>
      <Confirm refe={ref} state={state} profuct={id} />
    </main>
  );
};

// export default Confirmation;
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
)(Confirmation)