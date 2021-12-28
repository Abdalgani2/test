import React, { useContext, useEffect, useState } from "react";
import { ShowAndEditContext } from "../../contexts/showAndEdit";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./showAndEdit.css";

const Edit = () => {
  const showAndEditContext = useContext(ShowAndEditContext);
  const history = useHistory();

  useEffect(() => {
    // showAndEditContext.show();
    setAllInput();
  }, [showAndEditContext.item]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const setAllInput = () => {
    showAndEditContext.setTitle(showAndEditContext.item.title);
    showAndEditContext.setTags(showAndEditContext.item.tags);
    showAndEditContext.setDescription(showAndEditContext.item.description);
    showAndEditContext.setPrice(showAndEditContext.item.price);
    showAndEditContext.setQuantity(showAndEditContext.item.quantity);
    showAndEditContext.setShortDescription(
      showAndEditContext.item.shortDescription
    );
    showAndEditContext.setImage(showAndEditContext.item.image);
  };

  return (
    <>
      <div className="edit-product-body">
        <div className="edit-product">
          <h1 onClick={handleSubmit}>Edit Product</h1>
          <input
            className="input"
            placeholder="Title (name of the product)"
            type="text"
            defaultValue={showAndEditContext.item.title}
            onChange={(e) => {
              showAndEditContext.setTitle(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Tags (item category)"
            type="text"
            defaultValue={showAndEditContext.item.tags}
            onChange={(e) => {
              showAndEditContext.setTags(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Description (describe the item)"
            type="text"
            defaultValue={showAndEditContext.item.description}
            onChange={(e) => {
              showAndEditContext.setDescription(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Price (item cost)"
            type="text"
            defaultValue={showAndEditContext.item.price}
            onChange={(e) => {
              showAndEditContext.setPrice(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Quantity (number of items for sale )"
            type="number"
            defaultValue={showAndEditContext.item.quantity}
            onChange={(e) => {
              showAndEditContext.setQuantity(e.target.value);
            }}
          />
          <select
            onChange={(e) => {
              showAndEditContext.setLocation(e.target.value);
            }}
            name="location"
          >
            <option value="">Location</option>
            <option value="irbid">Irbid</option>
            <option value="amman">Amman</option>
            <option value="madaba">Madaba</option>
            <option value="zarqa">Zarqa</option>
            <option value="aqaba">Aqaba</option>
          </select>
          {/* <input
            className="input"
            placeholder="Location (Pick One: Amman, Irbid, Madaba, Zarqa, Aqaba)"
            type="text"
            defaultValue={showAndEditContext.item.location}
            onChange={(e) => {
              showAndEditContext.setLocation(e.target.value);
            }}
          /> */}
          <input
            className="input"
            placeholder="Short Description (Add a Short Description For The Item)"
            type="text"
            defaultValue={showAndEditContext.item.shortDescription}
            onChange={(e) => {
              showAndEditContext.setShortDescription(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Image (insert image url)"
            type="text"
            defaultValue={showAndEditContext.item.image}
            onChange={(e) => {
              showAndEditContext.setImage(e.target.value);
            }}
          />
          <button
            className="edit-product-button"
            onClick={(e) => {
              e.preventDefault();
              showAndEditContext.editProduct(showAndEditContext.item._id);
            }}
          >
            done
          </button>
          {showAndEditContext.messageTrue && (
            <div style={{ color: "green", marginTop: "10px" }}>
              {showAndEditContext.messageTrue}
            </div>
          )}
          {showAndEditContext.messageFalse && (
            <div style={{ color: "red", marginTop: "10px" }}>
              {showAndEditContext.messageFalse}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Edit;
