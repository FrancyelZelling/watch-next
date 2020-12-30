import React from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
import MovieDetails from "./components/MovieDetails";
import MovieList from "./components/MovieList";
//import { Counter } from "./features/counter/Counter";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./styles/app.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Header />
            <Movies />
            <hr />
            <MovieList />
          </div>
        </Route>
        <Route path="/movie/:id" component={MovieDetails} />
      </Switch>
    </Router>
  );
}

export default App;
