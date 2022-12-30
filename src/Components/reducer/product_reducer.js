import { GET_PRODUCTS_SUCCESS } from "../action";

const products_reducer = (state, action) => {
  if (action.type === GET_PRODUCTS_SUCCESS) {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      products_loading: false,
      products: action.payload,
      featured_products,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default products_reducer;
