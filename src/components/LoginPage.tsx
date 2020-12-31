import React, { useState } from "react";
import { setLogin as SetLogin } from "../features/movie/movieSlice";
import { useDispatch } from "react-redux";
import users from "../users";

function LoginPage() {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const checkCredentials = () => {
    users.forEach((item) => {
      if (item.login === login && item.password === password) {
        dispatch(SetLogin(true));
      }
    });
  };
  return (
    <div>
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
      <button onClick={checkCredentials}>send</button>
    </div>
  );
}

export default LoginPage;
