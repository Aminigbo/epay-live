import React, { useEffect, useState } from "react";
import "./best.css";
import search from "../../assets/icons/search.svg";
import arrow from "../../assets/icons/arrow.svg";
import Categories from "../Categories/Categories";
import { Link } from "react-router-dom";
import { useFilterContext } from "../Context/filter_context";
import { getUniqueValues } from "../utilities/helper";
import Laptop from "../LaptopLayout/Laptop";
import { Button, Result } from "antd";
const Index = ({ products, addToCart, state, cartprice, loading, start, end, title, allowSearch, setfilter }) => {

  const {
    filters: { text },
    // updateFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");


  const [productsstate, setproductsstate] = useState(products);


  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");


  const handleFilter = (event) => {
    const searchWord = event.target.value;

    setWordEntered(searchWord);
    const newFilter = products.filter((value) => {
      return value.category.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
    console.log(newFilter)
  };




  useEffect(
    () => {
      // updateFilters({ target: { name: "text", value: "" } });
      // updateFilters({ target: { name: "category", textContent: "all" } });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );


  const updateFilters_2 = (cat) => {
    console.log(cat)
    let filtCat = products.filter(e => e.category == cat)
    console.log(filtCat)
    console.log(products)
    setproductsstate(filtCat)
  }



  if (productsstate.length < 1 && loading != true) {
    return (
      <section className="best">
        <form className="best-form" onSubmit={(e) => e.preventDefault()}>
          <div className="in-search">
            <input
              type="text"
              name="text"
              value={text}
              // onChange={updateFilters}
              className="best-input"
            />
            <img src={search} alt="search" className="search" />
          </div>
        </form>
        <div id="best-con">
          <p>Best Selling Product</p>
        </div>
        <div id="best-link-con">
          <Categories categories={products} products={productsstate} updateFilters={updateFilters_2} />
        </div>

        <div id="best-result">
          <Result
            status="404"
            title="Item Not Found"
          // extra={
          //   <a href="/">
          //     <Button type="primary" className="cart-remove">
          //       Reload
          //     </Button>
          //   </a>
          // }
          />
        </div>
      </section>
    );
  }




  return (
    <section className="best">


      {allowSearch == true && <>
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

            {/* <input
            type="text"
            placeholder="Meet Other Brethren here...."
            value={wordEntered}
            onChange={handleFilter}
            id="searchInput"
          /> */}


            {/* <img src={search} alt="search" className="search" /> */}
          </div>
        </form>
      </>}

      <div id="best-con">
        {/* {console.log(products)} */}
        <p>{title}</p>
      </div>

      {setfilter == true && <>

        <div id="best-link-con">
          <Categories categories={products} products={products} updateFilters={updateFilters_2} />
        </div>
      </>}


      {filteredData.length != 0 ? (
        <div id="display-con" className="best-grid">
          {filteredData.slice(start, end).map((product) => {
            return <Laptop state={state} cartPrice={cartprice} addToCart={addToCart} key={product.id} product={product} />;
          })}
          {/* <AllItems items={products} /> */}
        </div>
      ) : <>
        <div id="" className="best-grid">
          {productsstate.slice(start, end).map((product) => {
            return <Laptop state={state} cartPrice={cartprice} addToCart={addToCart} key={product.id} product={product} />;
          })}
          {/* <AllItems items={products} /> */}
        </div>
      </>}



      {/* {console.log(state)} */}
      <div className="view-con">
        <Link to="/product" id="link-lin">
          <div className="view-main">
            <p className="view-text">View all</p>
            <img src={arrow} alt="#" id="arrow" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Index;
