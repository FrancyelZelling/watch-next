import React, { useState } from "react";
import {
  setLogin as SetLogin,
  setUser,
  user as User,
} from "../features/movie/movieSlice";
import { useDispatch } from "react-redux";
import users from "../users";

function LoginPage() {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const checkCredentials = () => {
    const result = users.filter(
      (user) => user.login === login && user.password === password
    );
    if (result.length > 0) {
      dispatch(setUser(login));
      dispatch(SetLogin(true));
    } else {
      alert("Invalid Credentials");
    }
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
