import React, { useState } from 'react' 
import { Link, useNavigate, useParams } from "react-router-dom";
import SignNav from "../Components/SignNav/index";
import SignUp from "../Components/SignUp/index";
import { connect } from 'react-redux'
import { signUpAction, } from '../redux'
import { supabase } from '../configurations';

const SignUpPage = ({ appState, signupUser }) => {
  const new_supabase = supabase()
  const navigate = useNavigate();
  const state = appState
  const [loading, setloading] = useState(false)
  const submit = (e) => {
    // console.log(e)
    setloading(true)
    new_supabase.auth.signUp(
      {
        email: e.email,
        password: e.password,
      },
      {
        data: e
      }
    )
      .then(success => {
        if (success.user == null) {
          setloading(false)

          alert("User with the details already exists.")
        } else {

          new_supabase.auth.signIn({
            email: e.email,
            password: e.password
          })
            .then(success2 => {
              if (success2.error == null) {

                new_supabase
                  .from("user")
                  .insert({
                    email: success2.email,
                    data: success2,
                  })
                  .then(response => {
                    navigate("/userAdmin")
                  })
              } else {
                alert("An error occured")
              }
              setloading(false)
            })
            .catch(error => {

            })

        }
        console.log(success)
      })
      .catch(error => {
        setloading(false)

        console.log(error)
      })
  }
  window.scrollTo(0, 0);
  return (
    <main>
      {console.log(state)}
      {loading == true && <><div style={{ position: "fixed", width: "100%", height: "100%", left: "0px", top: "0px", background: "rgb(0,0,0,0.6)", zIndex: "2000" }}></div> </>}
      {/* */}
      <SignNav />
      <SignUp submit={submit} />
    </main>
  );
};


const mapStateToProps = state => {
  return {
    appState: state.user
  }
}


const mapDispatchToProps = (dispatch, encoded) => {
  return {
    signupUser: (payload) => dispatch(signUpAction(payload)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage)
