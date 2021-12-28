import React, { useState, useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ItemCardContext from "./main";
import { LoginContext } from "./login";
import { HistoryContext } from "./history"

export const HeaderContext = React.createContext();

const HeaderProvider = (props) => {
  const loginContext = useContext(LoginContext);
  const itemCardContext = useContext(ItemCardContext);
  const historyContext = useContext(HistoryContext);

  const history = useHistory();
  const [filterLocation, setFilterLocation] = useState("");
  const [search, setSearch] = useState("");
  const [filterPrice, setFilterPrice] = useState("");
  const [found, setFound] = useState([]);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [page, setPage] = useState(0)
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(9);

  const state = {
    filterPrice,
    setFilterPrice,
    filterLocation,
    setFilterLocation,
    found,
    setSearch,
    message,
    searchItem,
    search,
    name,
    page,
    setPage,
    offset,
    setOffset,
    searchItem,
  };
  async function searchItem() {
    await axios
      .get("http://localhost:5000/main")
      .then((result) => {
        const find = result.data.filter((elem) => {
          return (
            (elem.title == search || search == "" || elem.tags == search) &&
            (elem.location == filterLocation || filterLocation == "") && elem.quantity != 0
          );
        });
        const setOfData = find.slice(offset, offset + perPage)
        historyContext.setSearchResult(setOfData);
        setPage(Math.ceil(find.length / perPage))
        setFound(find);
      })
      .catch((error) => {
        throw error;
      });

    history.push("/search/product");
  }

  return (
    <HeaderContext.Provider value={state}>
      {props.children}
    </HeaderContext.Provider>
  );
};
export default HeaderProvider;
