import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ItemCardContext } from "./../contexts/main";
import { HeaderContext } from "../contexts/header";
import Pagination from "../components/pagination/pagination"
import { HistoryContext } from "../contexts/history"
import "./main.css";

const SearchProduct = (props) => {
  const headerContext = useContext(HeaderContext);
  const itemCardContext = useContext(ItemCardContext);
  const historyContext = useContext(HistoryContext);
  const history = useHistory();

  useEffect(() => {
    headerContext.searchItem();
  }, [headerContext.offset]);


  if (headerContext.filterPrice == "ascending") {
    const f = historyContext.searchResult.sort(function (a, b) {
      return a.price - b.price;
    });
  }
  if (headerContext.filterPrice == "descending") {
    historyContext.searchResult.sort(function (a, b) {
      return b.price - a.price;
    });
  }

  const cardDetails = async (id) => {
    const foundItem = historyContext.searchResult.find((elem) => {
      return elem._id == id;
    });
    itemCardContext.setFound(foundItem);
    history.push("/product/details");
  };
  return (
    <>
      {historyContext.searchResult.length !== 0 ? (
        <div className="mainBody">
          {console.log(props)}
          {historyContext.searchResult.map((elem) => {
            if (elem.quantity !== 0) {
              return (
                <div
                  onClick={() => {
                    cardDetails(elem._id);
                  }}
                  className="itemCard"
                  key={elem._id}
                >
                  <div>
                    <img className="product-img" src={elem.image}></img>
                  </div>
                  <div>
                    <p className="title">{elem.title}</p>
                    <p className="info">Description: {elem.shortDescription}</p>
                    <p className="info">Located in: {elem.location}</p>
                    <p className="price">In Stock : {elem.quantity}</p>
                    <p className="price">price : {elem.price}$</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>
          There is no items to display at the moment
        </h1>
      )}
      <Pagination />
      <div></div>
    </>
  );
};
export default SearchProduct;
