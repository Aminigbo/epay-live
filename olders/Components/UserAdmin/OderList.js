import React from "react";
import { Link } from "react-router-dom";

const OderList = ({ item, state }) => {
  return (
    <div>
      <Link to={`/view-products/${item.product.product_code}-orders-${state.loggedInUser.email}`}>
        <div key={item.id}>
          <ul className="admin-user-list-con">
            {/* <li>{item.id}</li> */}
            <li className="admin-user-pro-title">{item.product.name}</li>
            <li>NGN {item.product.price}</li>
            <li>{item.product.created_at.substr(0,10)}</li>
          </ul>
        </div>
      </Link>
    </div>
  );
};

export default OderList;
