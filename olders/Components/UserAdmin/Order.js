import React from "react";
import AdminOrderList from "./AdminOrderList";
import "./useradmin.css";
// import { Result } from "antd";

const Order = ({state,orders}) => {
  return (
    <div className="admin-pro">
      <p className="admin-order-header">My Orders</p>

      {/* <div className="admin-empty">
        <Result status="404" title="No Orders Yet" />
      </div> */}
      <div>
        <ul className="admin-user-list-con">
          {/* <li>id</li> */}
          <li className="admin-user-pro-title">Product</li>
          <li >Amount</li>
          <li>Date</li>
        </ul>
      </div>
      <div>
        <AdminOrderList state={state} orders={orders} />
      </div>
    </div>
  );
};

export default Order;
