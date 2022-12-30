import React from "react";

const Categories = ({ updateFilters, products }) => {
  const categories = ['Home theaters', 'Television', 'furniture', 'Dinning set','Handsets','kitchen equipment','Mattress','washing machine']
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
