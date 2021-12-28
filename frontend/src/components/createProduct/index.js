import React, { useContext, useEffect, useState } from "react";
import { CreateProductContext } from "../../contexts/createProduct";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { LoginContext } from "./../../contexts/login";
import "./createProduct.css";

const CreateProduct = () => {
  const loginContext = useContext(LoginContext);
  const createProductContext = useContext(CreateProductContext);
  const history = useHistory();

  return (
    <>
      <div className="create-product-body">
        <div className="create-product">
          <p style={{ color: "black", fontSize: "30px", marginBottom: "20px" }}>
            Product Creation
          </p>
          <input
            className="input"
            placeholder="Title (name of the product)"
            type="text"
            onChange={(e) => {
              createProductContext.setTitle(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Tags (item category)"
            type="text"
            onChange={(e) => {
              createProductContext.setTags(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Description (describe the item)"
            type="text"
            onChange={(e) => {
              createProductContext.setDescription(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Price (item cost)"
            type="number"
            min="1"
            onChange={(e) => {
              createProductContext.setPrice(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Quantity (number of items for sale )"
            type="number"
            min="1"
            onChange={(e) => {
              createProductContext.setQuantity(e.target.value);
            }}
          />
          <select
            onChange={(e) => {
              createProductContext.setLocation(e.target.value);
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
          
          <input
            className="input"
            placeholder="Short Description (Add a Short Description For The Item)"
            type="text"
            onChange={(e) => {
              createProductContext.setShortDescription(e.target.value);
            }}
          />
          <input
            className="input"
            placeholder="Image (insert image url)"
            type="text"
            onChange={(e) => {
              createProductContext.setImage(e.target.value);
            }}
          />
          <button
            className="create-button"
            onChange={(e) => {
              createProductContext.setLocation(e.target.value);
            }}
            onClick={createProductContext.createProducts}
          >
            Submit Product Creation
          </button>

          {createProductContext.messageTrue && (
            <div style={{ color: "green" }}>
              {createProductContext.messageTrue}
            </div>
          )}
          {createProductContext.messageFalse && (
            <div style={{ color: "red" }}>
              {createProductContext.messageFalse}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
