import React, { useState } from "react";
import SignNav from "../Components/SignNav/index";
import Login from "../Components/Login/index";
import { supabase } from '../configurations';
import { Link, useNavigate, useParams } from "react-router-dom";

import { connect } from 'react-redux'
import { loginAction } from '../redux'

const LoginPage = ({ dispUser }) => {
  window.scrollTo(0, 0);
  const new_supabase = supabase()
  const navigate = useNavigate();
  const [loading, setloading] = useState(false)

  const login = (e) => {
    setloading(true)

    new_supabase.auth.signIn({
      email: e.email,
      password: e.password
    })
      .then(success2 => {


        if (success2.error == null) {
          dispUser(success2.user.user_metadata) 
              navigate("/userAdmin")
        } else {
          alert(success2.error.message)
        }
        setloading(false)
      })
      .catch(error => {
        alert("An error occured")
      })
  };


  return (
    <main>
      {loading == true && <><div style={{ position: "fixed", width: "100%", height: "100%", left: "0px", top: "0px", background: "rgb(0,0,0,0.6)", zIndex: "2000" }}></div> </>}

      <SignNav />
      <Login login={login} />
    </main>
  );
};

// export default LoginPage;

// export default ProductIdPage;
const mapStateToProps = state => {
  return {
    appState: state.user
  }
}


const mapDispatchToProps = (dispatch, encoded) => {
  return {
    dispUser: (user) => dispatch(loginAction(user)),
    // dispjackpot: (jackpot) => dispatch(disp_jackpots(jackpot)),
    // disp_stage_match: (stagged) => dispatch(stage_match(stagged)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)

