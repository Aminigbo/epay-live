const reducer = (state, action) => {
  if (action.type === "INCREASE") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        console.log(cartItem.amount);

        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
    //  alert(cartItem.amount);
  }

  if (action.type === "GET_TOTAL") {
    let { amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { amount } = cartItem;
        cartTotal.amount += amount;
        return cartTotal;
      },
      { amount: 0 }
    );
    return { ...state, amount };
  }
  throw new Error("no matching action type");
};

export default reducer;
