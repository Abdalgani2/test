import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { HeaderContext } from "./../contexts/header";
import axios from "axios";
import jwt from "jsonwebtoken";

export const LoginContext = React.createContext();

const LoginProvider = (props) => {
  const history = useHistory();
  const headerContext = useContext(HeaderContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [userIdLoggedIn, setUserIdLoggedIn] = useState("");
  const [userName, setUserName] = useState("");

  const state = {
    setEmail,
    setPassword,
    message,
    login,
    loggedIn,
    logout,
    userIdLoggedIn,
    userName,
  };

  useEffect(() => {
    saveId(localStorage.getItem("id"));
    saveName(localStorage.getItem("name"));
  }, []);

 
  const saveId = (id) => {
    setUserIdLoggedIn(id);
    localStorage.setItem("id", id);
  };
  const saveName = (name) => {
    setUserName(name);
    localStorage.setItem("name", name);
  };

  async function login() {
    try {
      const res = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });
      saveId(res.data.id);
      saveName(res.data.name);

      history.push("/");
      setLoggedIn(true);
    } catch (error) {
      setMessage(error.response.data);
    }
  }
  function logout() {
    setLoggedIn(false);
    localStorage.clear();
    history.push("/");
  }

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginProvider;
