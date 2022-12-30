import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppProvider } from "./Components/Context/context";
import { ProductsProvider } from "./Components/Context/product_context";
import { FilterProvider } from "./Components/Context/filter_context";
import { CartProvider } from "./Components/Context/cart_context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
