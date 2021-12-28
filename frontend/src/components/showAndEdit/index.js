import React, { useContext, useEffect, useState } from "react";
import { ShowAndEditContext } from "../../contexts/showAndEdit";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ShowAndEdit = () => {
  const showAndEditContext = useContext(ShowAndEditContext);
  const history = useHistory();

  useEffect(() => {
    showAndEditContext.show();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form>
        <div>
          <h1 onClick={handleSubmit}>Show And Edit</h1>
        </div>
        {showAndEditContext.found.map((elem) => {
          return (
            <div className="manage-product" key={elem._id}>
              <p className="title">{elem.title}</p>
              <p className="info">Description :{elem.shortDescription}</p>
              <p className="info">Located in :{elem.location}</p>
              <p className="price">In Stock : {elem.quantity}</p>
              <p className="price">Price :{elem.price}</p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  showAndEditContext.setProductId(elem._id);
                  showAndEditContext.setItem(elem);
                  history.push("/manage/product/edit");
                }}
                className="acttion-button"
              >
                edit
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  showAndEditContext.deleteProduct(elem._id);
                }}
                className="acttion-button"
              >
                delete
              </button>
            </div>
          );
        })}
      </form>
    </>
  );
};

export default ShowAndEdit;
