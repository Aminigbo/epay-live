import React from "react";

const Categories = ({ updateFilters, products }) => {
  const categories = ['Electronics', 'Furniture', 'Gloceries','kitchen equipment','Handsets','Mattresses']
  return (
    <ul id="best-linkss">
      {/* {console.log(products)} */}
      {categories.map((c, index) => {
        return (
          <span
            type="button"
            name="category"
            id="link"
            key={index}
            onClick={()=>{
              updateFilters(c)
            }}
            style={{margin:"10px 20px"}}
          >
            {c}
          </span>
        );
      })}
    </ul>
  );
};

export default Categories;
