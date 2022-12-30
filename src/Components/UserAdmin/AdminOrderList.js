import React, { useEffect, useState } from "react";
import { useFilterContext } from "../Context/filter_context";
// import { Link } from "react-router-dom";
import OderList from "./OderList";
import paginate from "../utilities/order";

const AdminOrderList = ({state,orders}) => {
  const { filtered_products: products } = useFilterContext();
  const [page, setPage] = useState(0);
  //   const [data, setData] = useState(products);
  //   const [followers, setFollowers] = useState(data[page]);

  //   setData(paginate(products));
  const { updateFilters } = useFilterContext();
  //   useEffect(() => {
  //     //   setFollowers(data[page]);
  //     setData(paginate(products));
  //   }, [products]);
  const followers = paginate(orders)[page];
  const data = paginate(orders);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };
  useEffect(
    () => {
      updateFilters({ target: { name: "text", value: "" } });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <>
      {console.log(orders)}
      {/* {followers.map((item) => {
        return <OderList item={item} />;
      })}

      <div className="btn-container">
        <button className="prev-btn" onClick={prevPage}>
          prev
        </button>
        {data.map((item, index) => {
          return (
            <button
              key={index}
              className={`page-btn ${index === page ? "active-btn" : null}`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <button className="next-btn" onClick={nextPage}>
          next
        </button>
      </div> */}
      <section className="followers">
        <div className="container">
          {followers.map((item) => {
            return <OderList key={item.id} item={item} state={state} />;
          })}
        </div>

        <div className="admin-order-btn-container">
          <button className="prev-btn" onClick={prevPage}>
            prev
          </button>
          {data.map((item, index) => {
            return (
              <button
                key={index}
                className={`page-btn ${index === page ? "active-btn" : null}`}
                onClick={() => handlePage(index)}
              >
                {index + 1}
              </button>
            );
          })}
          <button className="next-btn" onClick={nextPage}>
            next
          </button>
        </div>
      </section>
    </>
  );
};

export default AdminOrderList;
