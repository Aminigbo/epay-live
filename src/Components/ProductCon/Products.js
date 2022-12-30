import React, { useEffect, useState } from "react";
import "./product.css";
import Categories from "../Categories/Categories";
import AllItems from "../AllItems/AllItems";
import { useFilterContext } from "../Context/filter_context";
import { getUniqueValues } from "../utilities/helper";
import { connect } from 'react-redux'
import { dispProducts, addCRT, dispCartAmt } from '../../redux'
import { Redirect, useHistory, useParams } from "react-router-dom";

const Products = ({ appState }) => {
  const { filtered_products: products } = useFilterContext();
  const state = appState
  const { updateFilters, all_products } = useFilterContext();
  let { category } = useParams()
  const categories = getUniqueValues(all_products, "category");

  const [categoryData, setcategoryData] = useState([]);


  useEffect(
    () => {
      updateFilters({ target: { name: "text", value: "" } });
      updateFilters({ target: { name: "category", textContent: "all" } });

      const categoryProducs = state.products.filter(e => e.category == category)
      setcategoryData(categoryProducs)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps

    []
  );


  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");


  const handleFilter = (event) => {
    const searchWord = event.target.value;

    setWordEntered(searchWord);
    const newFilter = state.products.filter((value) => {
      return value.category.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    console.log(newFilter)
  };



  return (
    <div id="product-con">
      {console.log(state.products)}
      <form className="best-form" onSubmit={(e) => e.preventDefault()}>
        <div className="in-search">
          <input
            type="text"
            name="text"
            value={wordEntered}
            onChange={handleFilter}
            className="best-input"
            placeholder="Search for pro....."
          />
        </div>
      </form>

      <div id="best-con">
        {/* {console.log(products)} */}
        <p>Best Selling Product</p>
      </div>



      {filteredData.length != 0 ? (
        <>
          <AllItems items={filteredData} />
          {/* {console.log(filteredData)} */}
        </>
      ) : <>
        <AllItems items={category == "all" ? state.products:categoryData} />
        {/* {console.log(state.products)} */}
      </>}





    </div>
  );
};

// product={product} 

const mapStateToProps = state => {
  return {
    appState: state.user
  }
}


const mapDispatchToProps = (dispatch, encoded) => {
  return {
    disp_products: (payload) => dispatch(dispProducts(payload)),
    addToCart: (product) => dispatch(addCRT(product)),
    addCartAmount: (amount) => dispatch(dispCartAmt(amount)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
