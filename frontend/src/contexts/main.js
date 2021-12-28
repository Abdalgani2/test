import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { HeaderContext } from "./header";
export const ItemCardContext = React.createContext();

const ItemCardProvider = (props) => {
  const headerContext = useContext(HeaderContext);
  const [products, setProducts] = useState([]);
  const [found, setFound] = useState("");
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  const [perPage] = useState(9);
  const [pageCount, setPageCount] = useState(0);
  const [slice, setSlice] = useState([]);
  const [prodId, setProdId] = useState("");

  const state = {
    products,
    showProduct,
    setFound,
    found,
    slice,
    offset,
    setOffset,
    perPage,
    pageCount,
    prodId,
    setProdId,
  };
  async function showProduct() {
    try {
      await axios.get("http://localhost:5000/main").then((result) => {
        // console.log("result",result);
        const data1 = result.data.reverse();
        const data = data1.filter((elem) => {
          return elem.quantity !== 0;
        });
        const setOfdata = data.slice(offset, offset + perPage);
        setProducts(setOfdata);
        headerContext.setPage(Math.ceil(result.data.length / perPage));
      });
    } catch (error) {
      throw error;
    }
  }

  return (
    <ItemCardContext.Provider value={state}>
      {props.children}
    </ItemCardContext.Provider>
  );
};

export default ItemCardProvider;
