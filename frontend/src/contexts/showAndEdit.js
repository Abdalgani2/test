import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "./login";
import axios from "axios";

export const ShowAndEditContext = React.createContext();

const ShowAndEditProvider = (props) => {
  const loginContext = useContext(LoginContext);
  let id;
  let token;
  const [found, setFound] = useState([]);
  const [productId, setProductId] = useState("");
  const [item, setItem] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState("");
  const [optionsToExchange, setOptionsToExchange] = useState(false);
  const [itemLength, setItemLength] = useState("");
  const [itemHeight, setItemHeight] = useState("");
  const [itemWidth, setItemWidth] = useState("");
  const [itemWeight, setItemWeight] = useState("");
  const [location, setLocation] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [image, setImage] = useState("");
  const [messageTrue, setMessageTrue] = useState("");
  const [messageFalse, setMessageFalse] = useState("");

  const state = {
    found,
    show,
    editProduct,
    deleteProduct,
    setProductId,
    productId,
    item,
    setItem,
    setLocation,
    setTitle,
    setTags,
    setDescription,
    setPrice,
    setQuantity,
    setOptionsToExchange,
    setItemLength,
    setItemHeight,
    setItemWidth,
    setItemWeight,
    setShortDescription,
    setMessageTrue,
    setMessageFalse,
    setImage,
    image,
    messageTrue,
    messageFalse,
  };

  async function show() {
    id = localStorage.getItem("id");
    try {
      await axios.get("http://localhost:5000/main").then((result) => {
        setFound(
          result.data.filter((elem) => {
            return elem.userId === id && elem.sold === false;
          })
        );
      });
    } catch (error) {
      throw error;
    }
  }

  async function editProduct(product) {
    token = localStorage.getItem("token");
    try {
      await axios
        .put(
          `http://localhost:5000/manage/product?id=${product}`,
          {
            title,
            tags,
            description,
            price,
            quantity,
            optionsToExchange,
            itemLength,
            itemHeight,
            itemWidth,
            itemWeight,
            location,
            shortDescription,
            image,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((result) => {
          // setFound(result.data);
          show();
          setMessageTrue("Product Has Been Updated");
          setMessageFalse("");
        });
    } catch (error) {
      setMessageTrue("");
      setMessageFalse("An Error Has Occured, Please Fill in the Blanks");
      throw error;
    }
  }

  async function deleteProduct(product) {
    token = localStorage.getItem("token");
    try {
      await axios
        .delete(`http://localhost:5000/manage/product?id=${product}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((result) => {
          show();
        });
    } catch (error) {
      throw error;
    }
  }

  return (
    <ShowAndEditContext.Provider value={state}>
      {props.children}
    </ShowAndEditContext.Provider>
  );
};

export default ShowAndEditProvider;
