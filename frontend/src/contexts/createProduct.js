import React, { useContext, useEffect, useState } from "react";
import { LoginContext } from "./login";
import axios from "axios";

export const CreateProductContext = React.createContext();

const CreateProductProvider = (props) => {
  const loginContext = useContext(LoginContext);
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [location, setLocation] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [messageTrue, setMessageTrue] = useState("");
  const [messageFalse, setMessageFalse] = useState("");
  const [url, setUrl] = useState("");
  const [userId, setUserId] = useState("");

  const state = {
    setUrl,
    setTitle,
    setDescription,
    setPrice,
    messageTrue,
    messageFalse,
    createProducts,
    location,
  };

  async function createProducts() {
    await axios
      .post(
        "http://localhost:5000/create/product",
        {
          title,
          description,
          url,
          userId: loginContext.userIdLoggedIn,
        },
        {
          headers: {
            Authorization: `Bearer ${loginContext.token}`,
          },
        }
      )
      .then((result) => {
        setMessageTrue(
          "Your Product Creation Has Been sent Successfully, Waiting For Admin's Approval "
        );
        setMessageFalse("");
      })
      .catch((err) => {
        setMessageFalse(
          "An Error Has occurred, Make Sure To Fill-in The Blanks "
        );
        setMessageTrue("");
      });
  }

  return (
    <CreateProductContext.Provider value={state}>
      {props.children}
    </CreateProductContext.Provider>
  );
};

export default CreateProductProvider;
