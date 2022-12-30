import React from "react";
// import { useForm } from "react-hook-form";
import { Formik } from "formik";
// import { yupResolver } from "@hookform/resolvers/yup";
// import registrationSchema from "../yup/YupDetails/registrationSchema";
import Layout from "../Layout/Layout";
import "../Login/login.css";
import signup from "../../assets/images/sign-up.png";
import { registrationSchema } from "../utilities/YupDetails";

const Index = ({submit}) => {
  // const formOptions = { resolver: yupResolver(registrationSchema) };
  // const { register, handleSubmit, formState } = useForm(formOptions);
  // const { errors } = formState;
  // const [formData, setFormData] = useState({
  //   full_name: "",
  //   email: "",
  //   mobile_number: "",
  //   password: "",
  //   confirm_password: "",
  // });

  // const { full_name, email, mobile_number, password, confirm_password } =
  //   formData;

  // const onChange = (e) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(e)
    submit(e)
  };

  // if (password !== confirm_password) {
  //   alert("Password do not match");
  // }

  return (
    <Layout
      headerText="Create an account"
      gmailText="Sign up with Gmail"
      facebookText="Sign up with Facebook"
      footerText1="Already have an account?"
      footerText2="Login now"
      link="/login"
      image={signup}
    >
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          mobileNumber: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={registrationSchema}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values) => handleSubmit(values)}
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
            // <form onSubmit={handleSubmit}>
            <form action="/signup" method="post" onSubmit={handleSubmit}>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Full Name"
                value={values.fullName}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.fullName}
                className="form-controls"
                // value={full_name}
                // onChange={onChange}
                // {...register("password")}
                // className={`form-controls form-control ${
                //   errors.full_name ? "is-invalid" : ""
                // }`}
                // required
              />
              <div className="error-text">{errors.fullName}</div>
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
              <div className="error-text">{errors.email}</div>
              <input
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Phone Number"
                // className="form-controls"
                // value={mobile_number}
                // onChange={onChange}
                // {...register("password")}
                // className={`form-controls form-control ${
                //   errors.mobile_number ? "is-invalid" : ""
                // }`}
                // required
                value={values.mobileNumber}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.mobileNumber}
                className="form-controls"
              />
              <div className="error-text">{errors.mobileNumber}</div>
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
              <div className="error-text">{errors.password}</div>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                // className="form-controls"
                // value={confirm_password}
                // onChange={onChange}
                // {...register("confirmPwd")}
                // className={`form-controls form-control ${
                //   errors.confirmPwd ? "is-invalid" : ""
                // }`}
                // required
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                errors={errors.confirmPassword}
                className="form-controls"
              />
              <div className="error-text">{errors.confirmPassword}</div>
              <button
                className="btn "
                type="submit"
                // onClick={handleSubmit(Submit)}
              >
                Sign Up
              </button>
            </form>
          );
        }}
      </Formik>
    </Layout>
  );
};

export default Index;
