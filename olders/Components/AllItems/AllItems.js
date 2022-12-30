import React from "react";
import { Button, Result } from "antd";
import Laptop from "../LaptopLayout/Laptop";
import "./AllItems.css";

const AllItems = ({ items }) => {
  if (items.length < 1) {
    return (
      <div className="all-results">
        <Result
          status="404"
          title="Item Not Found"
          extra={
            <a href="/product">
              <Button type="primary" className="cart-remove">
                See Products
              </Button>
            </a>
          }
        />
      </div>
    );
  }
  return (
    <div className="best-grid">
      {/* {console.log(items)} */}
      {items.slice(0, 8).map((item) => {
        const { id } = item;
        return <Laptop key={id}  product={item}  />;
      })}
    </div>
  );
};

export default AllItems;
