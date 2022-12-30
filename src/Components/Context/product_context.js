import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/product_reducer";
import product from "../../data";
import { GET_PRODUCTS_SUCCESS } from "../action";

const initialState = {
  products: [],
  featured_products: [],
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchProducts = () => {
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: product });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        fetchProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
