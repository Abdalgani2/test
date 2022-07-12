
import { userContext } from './context/userContext';
import jwt from 'jwt-decode'
import Axios from "axios";
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';
import SignUp from "./components/signUp/signUp";
import Login from './components/signIn/signIn';
import Home from './components/home/Home';
import Product from './components/product/product';
import AddItem from './components/addItem/addItem';
import SearchItem from './components/searchItems/searchItems'


function App() {
  let t = localStorage.getItem("auth-token");


  const [token, setToken] = useState(t);
  const [userId, setUserId] = useState(false);
  const [admin, setAdmin] = useState(false);
 
  const loggedRoutes = <Routes>
    <Route path='/signUp' element={<SignUp />} />
    <Route path='/signIn' element={<Login />} />
    <Route path='/' element={<Home />} />
    <Route path='/product' element={<Product />} />
    <Route path='/addItem' element={<AddItem />} />
    <Route path='/Search' element={<SearchItem />} />
  </Routes>;
  const adminRoutes = <Routes>
  
  </Routes>;
  const regroute = <Routes>
    <Route path='/signUp' element={<SignUp />} />
    <Route path='/signIn' element={<Login />} />
    <Route path='/' element={<Home />} />
     <Route path='/product' element={<Product />} />
    <Route path='/addItem' element={<AddItem />} /> 
    <Route path='/Search' element={<SearchItem />} />
  </Routes>;
  const [routes, setRoutes] = useState(regroute);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setAdmin(null);
  }, []);

  useEffect(() => {
    let token = localStorage.getItem("auth-token");
    if (token === null) {
      localStorage.setItem("auth-token", "");
      token = "";
      setToken();
      setRoutes(regroute);
    }
    else if (token) {
      const user = jwt(token);
      console.log("jwt(token)",jwt(token));
      console.log(user.admin);
      console.log("token",token);

       if (user.admin) {
        setAdmin(true);
        setRoutes(adminRoutes);
      }
      else {
        setAdmin(false);
        setRoutes(loggedRoutes);
      }
    }
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    const bodyParameters = {
      key: "value"
    };
    console.log(token);
    Axios.post('http://localhost:4000/isValid', bodyParameters, config).then(result => {
      console.log(result);
      if (result.data.token === false) {
        localStorage.setItem("auth-token", "");
        setToken(false);
      }

    })
  }, []);

  return (
    <userContext.Provider value={
      {
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout
      }
    }>


      {routes}

    </userContext.Provider>
  );
}

export default App;
