import React from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";
import MovieList from "./components/MovieList"
//import { Counter } from "./features/counter/Counter";
import "./styles/app.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Movies />
      <hr/>
      <MovieList />
    </div>
  );
}

export default App;
