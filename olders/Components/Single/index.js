import React from "react";
import "./single.css";
import PictureLayout from "../SPicLayout/index";
import { Link } from "react-router-dom";

const index = ({ product, payload }) => {

  let off ='';
  if (product.price > 4001 && product.price < 50001) {
    off = 0.11
  } else if (product.price > 50000 && product.price < 150001) {
    off = 0.3
  }else if (product.price > 150000 && product.price < 300001 || product.price > 300001) {
    off = 0.45
  } 


  return (
    <section id="single-con">
      <div className="single-main-text-con">
        <h1 className="single-main-text">{product.title}</h1>
      </div>
      <div>
        <PictureLayout price={product.price} image={product.images} />
      </div>

      <div className="product-details">
        <div className="product-details__left">
          <h2>Product Description</h2>
          <p className="">{product.name}</p>
          <p>
            {product.description}
          </p>
          {/* <p>
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p> */}

        </div>
        {payload == null ? <>
          <div className="product-details__right">
            <h2>Payment Details</h2>
            {console.log(payload)}
            <div className=" ">
              <p className="">Total amount: NGN {product.price}.<small>00</small></p>
            </div>
            <div className=" ">
              <p className="">Make an initial deposit of {off*100}%</p>
            </div>
          </div>
        </> :
          <>
            <div className="product-details__right">
              <h2>Payment Details</h2> 

              {payload.data.payupperiod == "OUTRIGHT" ?
                <>
                  <div className=" ">
                    <p className="">An outright payment of :<b> NGN {payload.data.amountpaid}.<small>00</small></b></p>
                    <p className="">Transaction reference :<b> {payload.payment.transaction} </b></p>
                  </div>
                </>
                : <>
                  <div className=" ">
                    <p className="">Total amount: NGN {product.price}.<small>00</small></p>
                  </div>
                  <div className=" ">
                    <p className="">Make an initial deposit of {off*100}%</p>
                  </div>
                </>}



            </div>
          </>}

      </div>

      {payload == null ?
        <>
          <div className="sin-btn-con">
            {/* <Link to={`/payment/${product.product_code}/i021Ts`}> */}
            <button style={{ background: "grey" }} className="sin-btn">
              Pay NGN {Math.floor(product.price * off)}.<small>00</small> Now
            </button>
            {/* </Link> */}
          </div>
          <div className="single-main-text-con ">
            <h1 className="single-main-text">And spread the balance across</h1>
          </div>
        </>
        :
        <>
          <div className="sin-btn-con">
            {/* <Link to={`/payment/${product.product_code}/i021Ts`}> */}
            <button style={{ background: "grey" }} className="sin-btn">
              Paid NGN {Math.floor(payload.data.amountpaid)}.<small>00</small> Now
            </button>
            {/* </Link> */}
          </div>
          
        </>}
    </section>
  );
};

export default index;
