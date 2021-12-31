import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { LoginContext } from "./../../../contexts/login";
import { HeaderContext } from "./../../../contexts/header";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const loginContext = useContext(LoginContext);
  const headerContext = useContext(HeaderContext);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await loginContext.login();
    if (loginContext.loggedIn) {
      await history.push("/");
    }
  };
  const redirect = () => {
    if (loginContext.loggedIn) {
      history.push("/");
    }
  };
  return (
    <div className="login-body">
      <div className="login">
        <p style={{ color: "black", fontSize: "30px" }}> Commerce</p>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            className="input"
            type="email"
            placeholder="E-mail"
            onChange={(e) => loginContext.setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            onChange={(e) => loginContext.setPassword(e.target.value)}
          />
          <button className="done-button">Sign-In</button>
        </form>
        {redirect()}
        <p style={{ color: "black" }}>
          if you don't have an account, click&nbsp;
          <Link className="register-button" to="/register">
            here
          </Link>
        </p>
        {loginContext.message && (
          <div
            className="failMessage"
            style={{
              marginTop: "0px",
            
            }}
          >
            {loginContext.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
