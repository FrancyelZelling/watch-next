import React, { useState } from "react";
import { setLogin as SetLogin, setUser } from "../features/movie/movieSlice";
import { useDispatch } from "react-redux";
import users from "../users";
import { Redirect, useHistory } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const checkCredentials = () => {
    const result = users.filter(
      (user) => user.login === login && user.password === password
    );
    if (result.length > 0) {
      dispatch(setUser(login));
      dispatch(SetLogin(true));
      history.push("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <input
        type="text"
        name="login"
        onChange={(event) => setLogin(event.target.value)}
      />
      <input
        type="password"
        name="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={checkCredentials}>login</button>
    </div>
  );
}

export default LoginPage;
