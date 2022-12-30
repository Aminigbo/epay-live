import React from "react";
import "../LoanLayout/loan.css";
import LoanLayout from "../LoanLayout/index";
import { Link } from "react-router-dom";

const index = ({ product, payload }) => {
    let off ='';
  if (product.price > 4001 && product.price < 50001) {
    off = 0.11
  } else if (product.price > 50000 && product.price < 150001) {
    off = 0.3
  }else if (product.price > 150000 && product.price < 300001) {
    off = 0.45
  }

  return (
    <section className="loan">
      {console.log(product)}
      <div className="loan-text-con">
        <div className="loan-text-main-con">
          {payload == null ? <>
            <p className="loan-text">Select Your Loan Period</p>
          </> : <>
            {payload.data.payupperiod == "OUTRIGHT" ? <>
              <p className="loan-text">Successful transaction</p>
            </> : <>
              <p className="loan-text">Repay your loan</p>
            </>}
          </>}
          <div className="loan-line-con">
            <div className="loan-line"></div>
          </div>
        </div>
      </div>
      {payload == null ? <>
        <div className="loan-main-layout-con ">
          <LoanLayout
           label={"Select"}
            product={product.product_code}
            months="2 months"
            payAmounts={Math.floor((product.price - product.price * off) / 2)}
          />
          <LoanLayout
           label={"Select"}
            product={product.product_code}
            months="3 months"
            payAmounts={Math.floor((product.price - product.price * off) / 3)}
          />
          <LoanLayout
           label={"Select"}
            product={product.product_code}
            months="4 months"
            payAmounts={Math.floor((product.price - product.price * off) / 4)}
          />
        </div>
        <div className="mob-loan-main-layout-con ">
          <div className="mob-loan-main1">
            <LoanLayout
            label={"Select"}
              product={product.product_code}
              months="2 months"
              payAmounts={Math.floor((product.price - product.price * off) / 2)}
            />
            <LoanLayout
            label={"Select"}
              product={product.product_code}
              months="3 months"
              payAmounts={Math.floor((product.price - product.price * off) / 3)}
            />
          </div>
          <div className="tablet-loan-con2">
            <LoanLayout
            label={"Select"}
              product={product.product_code}
              months="4 months"
              payAmounts={Math.floor((product.price - product.price * off) / 4)}
            />
          </div>
        </div>
        <div className="or-con layout1">
          <div className="loan-left-line"></div>
          <p className="or-text">OR</p>
          <div className="loan-right-line"></div>
        </div>
        <div className="single-main-text-con ">
          <h1 className="loan-text">Make complete payment</h1>
        </div>
        <div className="sin-btn-con">
          <Link to={`/payment/${product.product_code}/i021TOUT`}>
            <button className="sin-btn">Pay NGN {product.price}.<small>00</small> Now</button>
          </Link>
        </div>
      </> : <>

        {payload.data.payupperiod == "OUTRIGHT" ? <>
        </> : <>

          <div className="loan-main-layout-con ">
            {payload.data.payupperiod == '2' && <>
              <LoanLayout
              label={"Repay"}
                product={product.product_code}
                months="2 months"
                payAmounts={Math.floor((product.price - product.price *off) / 2)}
              />
            </>}
            {payload.data.payupperiod == '3' && <>
              <LoanLayout
              label={"Repay"}
                product={product.product_code}
                months="3 months"
                payAmounts={Math.floor((product.price - product.price * off) / 3)}
              /></>}
            {payload.data.payupperiod == '4' && <> <LoanLayout
            label={"Repay"}
              product={product.product_code}
              months="4 months"
              payAmounts={Math.floor((product.price - product.price * off) / 4)}
            /></>}



          </div>
          <div className="mob-loan-main-layout-con ">
            <div className="mob-loan-main1">

              {payload.data.payupperiod == '2' && <> <LoanLayout
              label={"Repay"}
                product={product.product_code}
                months="2 months"
                payAmounts={Math.floor((product.price - product.price * off) / 2)}
              />
              </>}
              {payload.data.payupperiod == '3' && <> <LoanLayout
              label={"Repay"}
                product={product.product_code}
                months="3 months"
                payAmounts={Math.floor((product.price - product.price * off) / 3)}
              /></>}





            </div>
            <div className="tablet-loan-con2">
              {payload.data.payupperiod == '4' && <> <LoanLayout
              label={"Repay"}
                product={product.product_code}
                months="4 months"
                payAmounts={Math.floor((product.price - product.price * off) / 4)}
              /></>}

            </div>
          </div>
          {/* <div className="or-con layout1">
            <div className="loan-left-line"></div>
            <p className="or-text">OR</p>
            <div className="loan-right-line"></div>
          </div>
          <div className="single-main-text-con ">
            <h1 className="loan-text">Make complete payment</h1>
          </div>
          <div className="sin-btn-con">
            <Link to={`/payment/${product.product_code}/i021TOUT`}>
              <button className="sin-btn">Pay ${product.price}.<small>00</small> Now</button>
            </Link>
          </div> */}

        </>}


      </>}
    </section>
  );
};

export default index;
