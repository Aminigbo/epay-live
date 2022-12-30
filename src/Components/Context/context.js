import React, {
  useState,
  useReducer,
  useEffect,
  useContext,
  useCallback,
} from "react";
import reducer from "../reducer/reducer";
import cartItems from "../../data";
const allCategories = [...new Set(cartItems.map((item) => item.category))];
const AppContext = React.createContext();

const initialState = {
  cart: cartItems,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const [laptopItems, setLaptopItems] = useState(cartItems);
  const categories = allCategories;

  const increase = (id) => {
    dispatch({ type: "INCREASE", payload: id });
    // alert(amount)
  };

  const filterItems = (category) => {
    const newItems = cartItems.filter((item) => item.category === category);
    setLaptopItems(newItems);
  };

  const filterSearchedItems = useCallback(
    (laptopItems) => {
      laptopItems.filter((item) => {
        if (searchTerm === "") {
          return item;
        } else if (
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return item;
        }
        return item;
      });
    },
    [searchTerm]
  );

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.cart]);

  useEffect(() => {
    laptopItems.filter((item) => {
      if (searchTerm === "") {
        return item;
      } else if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return item;
      }
      return item;
    });
  }, [laptopItems, searchTerm]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        categories,
        laptopItems,
        setLaptopItems,
        filterItems,
        filterSearchedItems,
        searchTerm,
        increase,
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };

// export default myContext;
