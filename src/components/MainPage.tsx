import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLocalStorageMovies } from "../features/movie/movieSlice";
import Header from "./Header";
import Movies from "./Movies";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocalStorageMovies());
  });

  return (
    <Router>
      <Switch>
        <div className="App">
          <Header />
          <Route exact path="/" component={Movies} />
          <Route path="/search/:query" component={MovieList} />
          <Route path="/movie/:id" component={MovieDetails} />
        </div>
      </Switch>
    </Router>
  );
};

export default MainPage;
