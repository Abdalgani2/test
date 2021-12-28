import React, { useState, useContext, useEffect } from "react";
import { HeaderContext } from "../../../src/contexts/header";
import { LoginContext } from "../../../src/contexts/login";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import SettingsMenu from "./../header/edit";
import logo from "./cart.png";
import searchIcon from "./search.png";
import { CartContext } from "./../../contexts/cart";

import "./header.css";
const Header = () => {
  const cartContext = useContext(CartContext);
  const headerContext = useContext(HeaderContext);
  const history = useHistory();

  useEffect(() => {
    if (headerContext.filterLocation !== "") {
      headerContext.searchItem();
    }
  }, [headerContext.filterLocation]);

  const loginContext = useContext(LoginContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const handleClick = () => {
    history.push("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="navBar">
          <div className="leftNavBar">
            <p onClick={handleClick} className="websiteName">
              Commerce
            </p>

            
            <input
              className="search-bar"
              onChange={(e) => {
                headerContext.setSearch(e.target.value);
              }}
              placeholder="Search"
            />
            <img
              className="search-button"
              src={searchIcon}
              onClick={(e) => {
                headerContext.searchItem();
              }}
            />
          </div>

          {loginContext.token ? (
            <div className="accountSettings">
              <p className="display-name">{`Welcome, ${loginContext.userName}`}</p>
              <img
                src={logo}
                onClick={() => {
                  cartContext.showCart();
                }}
              />
              <div>
                <SettingsMenu />
              </div>
            </div>
          ) : (
            <div className="rightNavBar">
              <Link to="/login">login</Link>
            </div>
          )}
        </div>
      </form>
      {headerContext.message && <div>{headerContext.message}</div>}
    </>
  );
};

export default Header;
