import React, { useState } from "react";
import "./pay.css";
import Lock from "../../assets/icons/lock.svg";
import masterCard from "../../assets/icons/mastercard.svg";
import visa from "../../assets/icons/visa.svg";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import { DropdownInput } from "../inputs/dropdown-input-v2/DropdownInput";
import FileInputs from "../inputs/file-inputs/FileInputs";
import { supabase } from '../../configurations';
import { Link, useNavigate, useParams } from "react-router-dom";
import { PaystackButton, PaystackConsumer } from "react-paystack";


const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(),
  },
  "& .MuiInputBase-input::Placeholder": {},
  "& .MuiInputBase-input": {
    borderRadius: 10,
    position: "relative",
    border: "1px solid #c4c4c4",
    fontSize: 16,
    width: "100%",
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontStyle: " normal",
    fontWeight: "400",
  },
}));

const idOptions = [
  { name: "National ID", value: "National ID", id: 1 },
  { name: "Voters Card", value: "Voters Card", id: 2 },
  { name: "Drivers license", value: "Drivers license", id: 3 },
  { name: "International Passport", value: "International Passport", id: 4 },
];












const Index = ({ state, product }) => {

  const new_supabase = supabase()
  const navigate = useNavigate();


  const [month, setMonth] = useState([]);
  const [year, setYear] = useState([]);

  const { id, method } = useParams();
  let check = method.split("-")[1]


  const handleChange = (value) => {
    // console.log(`selected ${value}`);
  };

  let actualPrice = ''

  if (check == null) {
    actualPrice = product.price
  } else {
    actualPrice = product.price * 0.3
  }






  const [checkoutvalue, setcheckoutvalue] = useState({
    name: state.loggedInUser != "" ? state.loggedInUser.fullName : "",
    email: state.loggedInUser != "" ? state.loggedInUser.email : '',
    phone: state.loggedInUser != "" ? state.loggedInUser.mobileNumber : '',
    city: "",
    address: "",
    card_number: "",
    expiration_month: "",
    expiration_year: "",
    cvv: "",
    name_on_card: "",
    card_pin: "",
  })


  // ==================================================





  // paystack payload
  let config = {};

  //  if (User != null) {
  //     config = {
  //        reference: new Date().getTime().toString(),
  //        email: User.user.email,
  //        amount: amount + "00",
  //        publicKey: "pk_test_9b62879216dcf007de5692c2f01c954be13b360d",
  //     };
  //  }

  config = {
    reference: new Date().getTime().toString(),
    // email: state.loggedInUser.email,
    amount: actualPrice + "00",
    publicKey: "pk_live_d2578d44401c2c1301d99b6a43831182bf81fedb",
    email: checkoutvalue.email
  };



  // you can call this function anything
  const handleSuccess = (ref) => {
    if (ref.message == "Approved") {
      setloading(true)
      let payload = {
        ...checkoutvalue,
        type: check == null ? 'OUTRIGHT' : `installment-${check}`,
        payupperiod: check == null ? 'OUTRIGHT' : `${check}`,
        amountpaid: actualPrice,
        productprice: product.price,
        ref,

      }

      new_supabase
        .from("orders")
        .insert({
          user: state.loggedInUser,
          data: payload,
          payment: payload.ref,
          product: product,
          userEmail: state.loggedInUser.email,
          productID: product.product_code
        })
        .then(response => {
          let ref = response.body[0].payment.reference;
          navigate(`/confirm/${id}/${ref}`)
          setloading(false)
        })
        .catch(error => {
          // alert("An error occured.")
          // console.log(error)
          setloading(false)
        })


      new_supabase
        .from("revenue")
        .insert({
          ref: payload.ref,
          amount: payload.amountpaid,
          data: { ...payload, user: state.loggedInUser },
        })
        .then(response => {
        })
        .catch(error => {
          alert("An error occured.")
        })




    } else {
      alert("Declined")
    }
    // setAmount("")
  };

  // you can call this function anything
  const handleClose = () => {
    // toast.error('Topup declined', {
    //   position: "top-right",
    //   autoClose: 3000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
    alert("Closed")
  };


  const componentProps = {
    ...config,
    text: "Paystack Button Implementation",
    onSuccess: (reference) => handleSuccess(reference),
    onClose: handleClose,
  };







  const [loading, setloading] = useState(false)


  return (
    <div id="payment-con">
      {loading == true && <><div style={{ position: "fixed", width: "100%", height: "100%", left: "0px", top: "0px", background: "rgb(0,0,0,0.6)", zIndex: "2000" }}></div> </>}
      {/* {checkFormInputs()} */}
      {/* {console.log(method)} */}
      <p id="payment-header">Payment</p>
      {check == null &&
        <>
          <div id="payment-card">

            <form id="pay-form">

              {/* <p id="form-text">Fullname</p> */}
              {/* {console.log(state.loggedInUser.fullname)} */}
              <input
                type="text"
                placeholder="Enter your fullname"
                className="card-input"
                value={checkoutvalue.name}

                disabled={state.loggedInUser != "" ? true : false}
                onChange={(e) => {
                  setcheckoutvalue({
                    ...checkoutvalue,
                    name: e.target.value
                  })
                }}

              />


              {/* <p id="form-text">Email</p> */}
              <input
                type="text"
                placeholder="Enter your Email"
                className="card-input"
                value={checkoutvalue.email}
                onChange={(e) => {
                  setcheckoutvalue({
                    ...checkoutvalue,
                    email: e.target.value
                  })
                }}
                disabled={state.loggedInUser != "" ? true : false}
              />

              {/* <p id="form-text">Phone</p> */}
              <input
                type="text"
                placeholder="Enter your phone"
                className="card-input"
                value={checkoutvalue.phone}
                onChange={(e) => {
                  setcheckoutvalue({
                    ...checkoutvalue,
                    phone: e.target.value
                  })
                }}
                disabled={state.loggedInUser != "" ? true : false}
              />

              {/* <p id="form-text">City</p> */}
              <input
                type="text"
                placeholder="Enter your city"
                className="card-input"
                value={checkoutvalue.city}
                onChange={(e) => {
                  setcheckoutvalue({
                    ...checkoutvalue,
                    city: e.target.value
                  })
                }}
              />

              {/* <p id="form-text">Address</p> */}
              <input
                type="text"
                placeholder="Enter your address"
                className="card-input"
                value={checkoutvalue.address}
                onChange={(e) => {
                  setcheckoutvalue({
                    ...checkoutvalue,
                    address: e.target.value
                  })
                }}
              />
              <input
                type="text"
                placeholder="Enter your address"
                className="card-input"
                value="NIGERIA"
                disabled
                style={{ cursor: "no-drop" }}
              />
              {/* <br />


              <input
                type="checkbox"
                id="instantCheckout"
                name="instantCheckout"
                value="This will eneable instant checkout in future!"
                className="check-box"
              />
              <label htmlFor="instantCheckout" className="check-box-text">
                This will enable instant checkout in future!
              </label>*/}


            </form>
          </div>
        </>}

      {check != null && <>
        <div id="payment-card">
          <div id="card-header" className="layout1">
            <p id="card-header-text">Credit Card Information</p>
            <div id="card-header-sub-con">
              <img src={Lock} alt="" className="lock" />
              <p id="card-secure-text">Secure server</p>
            </div>
          </div>
          <form id="pay-form">
            <p id="form-text">Card Number</p>
            <div className="layout1 form-main-control">
              <input
                type="text"
                placeholder="1222 4444 1111 0303"
                className="card-input"
                maxLength={12}
                value={checkoutvalue.card_number}
                onChange={(e) => {
                  setcheckoutvalue({
                    ...checkoutvalue,
                    card_number: e.target.value
                  })
                }}

              />
              <div className="layout1" id="card-logo-main">
                <div className="card-logo-con master">
                  <img src={masterCard} alt="" className="card-logo" />
                </div>
                <div className="card-logo-con">
                  <img src={visa} alt="" className="card-logo" />
                </div>
              </div>
            </div>
            <div className="layout1 form-flex">
              <div className=" box-con">
                <p id="form-text">Expiration Date</p>
                <div className="layout1 ">
                  <div id="mat-box">
                    <FormControl id="form-control">
                      <Select
                        displayEmpty
                        value={checkoutvalue.expiration_month}

                        onChange={(e) => {
                          setcheckoutvalue({
                            ...checkoutvalue,
                            expiration_month: e.target.value
                          })
                        }}
                        input={<BootstrapInput />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return (
                              <p
                                style={{
                                  color: "#c4c4c4",
                                  letterSpacing: "0.3em",
                                  fontFamily: ["Courier New"],
                                  fontStyle: " normal",
                                  fontWeight: "400",
                                  fontSize: "16px",
                                }}
                              >
                                Month
                              </p>
                            );
                          }

                          return selected;
                        }}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="January">January</MenuItem>
                        <MenuItem value="February">February</MenuItem>
                        <MenuItem value="March">March</MenuItem>
                        <MenuItem value="April">April</MenuItem>
                        <MenuItem value="May">May</MenuItem>
                        <MenuItem value="June">June</MenuItem>
                        <MenuItem value="July">July</MenuItem>
                        <MenuItem value="August">August</MenuItem>
                        <MenuItem value="September">September</MenuItem>
                        <MenuItem value="October">October</MenuItem>
                        <MenuItem value="November">November</MenuItem>
                        <MenuItem value="December">December</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div id="mat-box">
                    <FormControl id="form-control">
                      <Select
                        displayEmpty
                        value={checkoutvalue.expiration_year}
                        onChange={(e) => {
                          setcheckoutvalue({
                            ...checkoutvalue,
                            expiration_year: e.target.value
                          })
                        }}
                        input={<BootstrapInput />}
                        renderValue={(selected) => {
                          if (selected.length === 0) {
                            return (
                              <p
                                style={{
                                  color: "#c4c4c4",
                                  letterSpacing: "0.3em",
                                  fontFamily: [
                                    //   "source-code-pro",
                                    //   "Menlo",
                                    //   "Monaco",
                                    //   "Consolas",
                                    "Courier New",
                                    //   "sans-serif",
                                  ],
                                  fontStyle: " normal",
                                  fontSize: "16px",
                                  fontWeight: "400",
                                }}
                              >
                                Year
                              </p>
                            );
                          }

                          return selected;
                        }}
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="2010">2010</MenuItem>
                        <MenuItem value="2011">2011</MenuItem>
                        <MenuItem value="2013">2013</MenuItem>
                        <MenuItem value="2014">2014</MenuItem>
                        <MenuItem value="2015">2015</MenuItem>
                        <MenuItem value="2016">2016</MenuItem>
                        <MenuItem value="2017">2017</MenuItem>
                        <MenuItem value="2018">2018</MenuItem>
                        <MenuItem value="2019">2019</MenuItem>
                        <MenuItem value="2020">2020</MenuItem>
                        <MenuItem value="2021">2021</MenuItem>
                        <MenuItem value="2022">2022</MenuItem>
                        <MenuItem value="2022">2023</MenuItem>
                        <MenuItem value="2022">2024</MenuItem>
                        <MenuItem value="2022">2025</MenuItem>
                        <MenuItem value="2022">2026</MenuItem>
                        <MenuItem value="2022">2027</MenuItem>
                        <MenuItem value="2022">2028</MenuItem>
                        <MenuItem value="2022">2029</MenuItem>
                        <MenuItem value="2022">2030</MenuItem>
                        <MenuItem value="2022">2031</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              <div id="card-logo-main2">
                <p id="form-text">CVC</p>
                <input
                  value={checkoutvalue.cvv}
                  onChange={(e) => {
                    setcheckoutvalue({
                      ...checkoutvalue,
                      cvv: e.target.value
                    })
                  }}
                  type="text" placeholder="cvc" className="cvc-input" />
              </div>
            </div>
            {/* <p id="form-text">BVN</p> */}
            <br />
            <input
              type="text"
              placeholder="Name on card"
              className="card-input"
              value={checkoutvalue.name_on_card}
              onChange={(e) => {
                setcheckoutvalue({
                  ...checkoutvalue,
                  name_on_card: e.target.value
                })
              }}
            />
            {/* <p id="form-text">Name on Card</p> */}
            <input
              type="text"
              placeholder="BVN"
              className="card-input"
              value={checkoutvalue.card_pin}
              onChange={(e) => {
                setcheckoutvalue({
                  ...checkoutvalue,
                  card_pin: e.target.value
                })
              }}
            />

            <form id="pay-form">

              {/* <p id="form-text">Fullname</p> */}
              {/* {console.log(state.loggedInUser.fullname)} */}
              <input
                type="text"
                placeholder="Enter your fullname"
                className="card-input"
                value={checkoutvalue.name}

                disabled={state.loggedInUser != "" ? true : false}
                onChange={(e) => {
                  setcheckoutvalue({
                    ...checkoutvalue,
                    name: e.target.value
                  })
                }}

              />


              {/* <p id="form-text">Email</p> */}
              <input
                type="text"
                placeholder="Enter your Email"
                className="card-input"
                value={checkoutvalue.email}

                disabled={state.loggedInUser != "" ? true : false}
                onChange={(e) => {
                  setcheckoutvalue({
                    ...checkoutvalue,
                    email: e.target.value

                  })
                }}
              />

              {/* <p id="form-text">Phone</p> */}
              <input
                type="text"
                placeholder="Enter your phone"
                className="card-input"
                value={checkoutvalue.phone}
                onChange={(e) => {
                  setcheckoutvalue({
                    ...checkoutvalue,
                    phone: e.target.value
                  })
                }}
                disabled={state.loggedInUser != "" ? true : false}
              />

              {/* <p id="form-text">City</p> */}
              <input
                type="text"
                placeholder="Enter your city"
                className="card-input"
                value={checkoutvalue.city}
                onChange={(e) => {
                  setcheckoutvalue({
                    ...checkoutvalue,
                    city: e.target.value
                  })
                }}
              />

              {/* <p id="form-text">Address</p> */}
              <input
                type="text"
                placeholder="Enter your address"
                className="card-input"
                value={checkoutvalue.address}
                onChange={(e) => {
                  setcheckoutvalue({
                    ...checkoutvalue,
                    address: e.target.value
                  })
                }}
              />
              <input
                type="text"
                placeholder="Enter your address"
                className="card-input"
                value="NIGERIA"
                disabled
                style={{ cursor: "no-drop" }}
              />
              {/* <br />


              <input
                type="checkbox"
                id="instantCheckout"
                name="instantCheckout"
                value="This will eneable instant checkout in future!"
                className="check-box"
              />
              <label htmlFor="instantCheckout" className="check-box-text">
                This will enable instant checkout in future!
              </label>*/}

            </form>
            <p id="form-text" className="ship">
              Means of Identification
            </p>
            <div className="form-line"></div>
            <div className="form-dropdown">
              <DropdownInput
                placeHolder="Means of Identification"
                onChange={handleChange}
                options={idOptions}
              />

            </div>
            <div>
              <FileInputs name="identifications" id="identifications" />
            </div>



          </form>
        </div>
      </>}

      <br />
      <input
        type="checkbox"
        id="terms"
        name="terms"
        value="Accept Terms & Conditions"
        className="check-box"
      />
      <label HTMLfor="terms" className="check-box-text">
        Accept <Link to="/tc">Terms</Link> & <Link to="/tc">Conditions</Link>
      </label>
      <div className="layout1" id="layout-back">
        {/* <Link to="/product" id="link-lin">
              <p id="form-text">Back to Shopping</p>
            </Link> */}

        <PaystackConsumer {...componentProps}>
          {({ initializePayment }) => (

            <b
              onClick={() => {

                const checkbox = document.getElementById('terms');

                if (
                  checkbox.checked
                ) {

                  if (check != null) {
                    if (checkoutvalue.name.length < 8 || checkoutvalue.email.length < 5 ||
                      checkoutvalue.phone.length < 11 || checkoutvalue.city.length < 10 || checkoutvalue.address.length < 10
                      || checkoutvalue.card_number.length < 12 || checkoutvalue.expiration_month.length == '' || checkoutvalue.expiration_year.length == ''
                      || checkoutvalue.cvv.length < 3 || checkoutvalue.name_on_card.length < 7 || checkoutvalue.card_pin.length < 4) {
                      alert("Provide all details")

                    } else {
                      initializePayment(handleSuccess, handleClose);
                    }
                    // console.log(checkoutvalue)
                  } else if (check == null) {
                    if (checkoutvalue.name.length < 8 || checkoutvalue.email.length < 5 ||
                      checkoutvalue.phone.length < 11 || checkoutvalue.city.length < 10 || checkoutvalue.address.length < 10
                    ) {
                      alert("Provide all details")
                    } else {
                      initializePayment(handleSuccess, handleClose);
                    }
                  }

                } else {
                  alert("Accept terms and conditions to continue ")
                }






              }}
              style={{ fontWeight: 900, color: "#0C1825", padding: "11px 15px", borderRadius: "6px" }}>
              <button className="sin-btn">Confirm my order</button>
            </b>
          )}
        </PaystackConsumer>


      </div>

    </div>
  );
};

export default Index;
