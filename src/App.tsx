import React from "react";
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import { Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { loggedIn } from "./features/movie/movieSlice";

import "./styles/app.css";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Header from "./components/Header";

function App() {
  const logged = useSelector(loggedIn);

  return (
    <Switch>
      <div>
        <Header />
        <Route exact path="/">
          {!logged ? <Redirect to="/login" /> : <MainPage />}
        </Route>
        <Route path="/login" component={LoginPage} />
        <Route path="/search/:query" component={MovieList} />
        <Route path="/movie/:id" component={MovieDetails} />
      </div>
    </Switch>
  );
}

export default App;
