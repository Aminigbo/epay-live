import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
  fullName: Yup.string().required("Please enter your full name"),
  mobileNumber: Yup.string().required("Please input your mobile number"),
  email: Yup.string()
    .email("Please Enter a valid email")
    .required("Please input your email"),
  password: Yup.string()
    .min(6, "Password should contain more than 6 characters")
    .required("Please input your password"),
  confirmPassword: Yup.string()
    .required("Password is mendatory")
    .oneOf([Yup.ref("password")], "Passwords does not match"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please Enter a valid email")
    .required("Please input your email"),
  password: Yup.string()
    .min(6, "Password should contain more than 6 characters")
    .required("Please input your password"),
});

// export default registrationSchema;
