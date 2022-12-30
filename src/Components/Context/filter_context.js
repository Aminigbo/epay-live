import React, { useEffect, useContext, useReducer } from "react";
import reducer from "../reducer/filter_reduce";
import {
  LOAD_PRODUCTS,
  //   SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
} from "../action";
import { useProductsContext } from "./product_context";

const initialState = {
  filtered_products: [],
  all_products: [],
  filters: {
    text: "",
    category: "all",
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };
  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    // dispatch({ type: SORT_PRODUCTS });
  }, [state.sort, state.filters]);
  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateFilters,
        // state.filters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
export const useFilterContext = () => {
  return useContext(FilterContext);
};
