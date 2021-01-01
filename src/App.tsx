import React from "react";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
//import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { loggedIn } from "./features/movie/movieSlice";

import "./styles/app.css";

function App() {
  const logged = useSelector(loggedIn);

  return (
    <Router>
      <Switch>
        {logged ? (
          <Route to="/home" component={MainPage} />
        ) : (
          <Route exact path="/" component={LoginPage} />
        )}
      </Switch>
    </Router>
  );
}

export default App;
