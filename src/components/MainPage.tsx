import React from "react";
import Header from "./Header";
import Movies from "./Movies";
import MovieList from "./MovieList";

const MainPage: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Movies />
      <hr />
      <MovieList />
    </div>
  );
};

export default MainPage;
