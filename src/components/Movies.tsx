import React from "react";
import MovieItem from "./MovieItem";

const Movies: React.FC = () => {
  return (
    <div>
      <h2>Movies</h2>
      <MovieItem />
      <MovieItem />
      <MovieItem />
    </div>
  );
};

export default Movies;
