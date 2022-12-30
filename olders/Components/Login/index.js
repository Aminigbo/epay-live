import React from "react";

import { Formik } from "formik";
import "./login.css";
import Login from "../../assets/images/login.png";
import Layout from "../Layout/Layout";
import { loginSchema } from "../utilities/YupDetails";

const Index = ({login}) => {
  
  return (
    <Layout
      headerText="Log In into Your Account"
      gmailText="Log in with Gmail"
      facebookText="Log in with Facebook"
      footerText1="Don’t have an account?"
      footerText2="Sign Up now"
      link="/sign"
      image={Login}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => login(values)}
      >
        {(props) => {
          const {
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            // touched
          } = props;
          return (
            <form action="/login" method="post">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                // className="form-controls"
                // value={email}
                // onChange={onChange}
                // {...register("password")}
                // className={`form-controls form-control ${
                //   errors.email ? "is-invalid" : ""
                // }`}
                // required
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.email}
                className="form-controls"
              />
              <div className="error-text" style={{color:"crimson"}}>{errors.email}</div>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                // className="form-controls"
                // value={password}
                // onChange={onChange}
                // {...register("password")}
                // className={`form-controls form-control ${
                //   errors.password ? "is-invalid" : ""
                // }`}
                // required
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.password}
                className="form-controls"
              />
              <div className="error-text"  style={{color:"crimson"}}>{errors.password}</div>
              <button className="btn " type="submit" onClick={handleSubmit}>
                Log In
              </button>
            </form>
          );
        }}
      </Formik>
    </Layout>
  );
};

export default Index;
