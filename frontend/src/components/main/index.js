import React, { useContext, useEffect, useState } from "react";
import { ItemCardContext } from "./../../contexts/main";
import axios from "axios";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router-dom";
import Pagination from "../pagination/pagination";
import createProduct from "../createProduct/index";
import "./main.css";

const Main = () => {
  const itemCardContext = useContext(ItemCardContext);
  const history = useHistory();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    itemCardContext.showProduct();
  }, [itemCardContext.offset]);

  const cardDetails = async (id) => {
    itemCardContext.setProdId(id);
    const foundItem = itemCardContext.products.find((elem) => {
      return elem._id == id;
    });
    itemCardContext.setFound(foundItem);
    history.push("/product/details");
  };

  return (
    <>
    
      <div className="mainBody">
        <button>create product</button>
        {itemCardContext.products.map((elem) => {
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
                <p className="title">{elem.title} </p>
                <p className="info">Description : {elem.shortDescription}</p>
                <p className="info">Located in : {elem.location}</p>
                <p className="price">In Stock : {elem.quantity}</p>
                <p className="price">Price : {elem.price}$</p>
              </div>
            </div>
          );
        })}
      </div>
      <Pagination />
    </>
  );
};

export default Main;
