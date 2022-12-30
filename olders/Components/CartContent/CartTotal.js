import React from "react";
import { useCartContext } from "../Context/cart_context";
const CartTotals = ({data, cart}) => { 
 
  Array.prototype.sum = function (prop) {
    var total = 0
    for (var i = 0, _len = this.length; i < _len; i++) {
      total += this[i][prop]
    }
    return total
  }
 
  const total = data.sum("price")


  return (
    <div id="cart-totals">
      <article className="cart-total-con">
        <b className="cart-total-text">
          Total : &nbsp; &nbsp; &nbsp; <span className=" "> <small>NGN</small> {total}</span>
        </b>
      </article>
    </div>
  );
};
//  "antd": "^4.21.0",
//     "bootstrap": "^5.1.3",
//     "chart.js": "^3.8.0",
//     "react": "^17.0.2",
//     "react-bootstrap": "^2.4.0",
//     "react-chartjs-2": "^4.1.0",
//     "react-dom": "^17.0.2",
//     "react-range": "^1.8.12",
//     "react-responsive-carousel": "^3.2.23",
//     "react-router-dom": "^6.3.0",
//     "react-scripts": "4.0.3",
//     "react-whirligig": "^6.6.15",
//     "web-vitals": "^1.1.2"

// const Wrapper = styled.section`
//   margin-top: 3rem;
//   display: flex;
//   justify-content: center;
//   article {
//     border: 1px solid var(--clr-grey-8);
//     border-radius: var(--radius);
//     padding: 1.5rem 3rem;
//   }
//   h4,
//   h5,
//   p {
//     display: grid;
//     grid-template-columns: 200px 1fr;
//   }
//   p {
//     text-transform: capitalize;
//   }
//   h4 {
//     margin-top: 2rem;
//   }
//   @media (min-width: 776px) {
//     justify-content: flex-end;
//   }
//   .btn {
//     width: 100%;
//     margin-top: 1rem;
//     text-align: center;
//     font-weight: 700;
//   }
// `;

export default CartTotals;
