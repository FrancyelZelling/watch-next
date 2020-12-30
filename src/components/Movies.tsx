import React from "react";
import MovieItem from "./MovieItem";
import { useSelector } from "react-redux";
import { moviesList } from "../features/movie/movieSlice";

const Movies: React.FC = () => {
  const movies = useSelector(moviesList);

  return (
    <div>
      <h2>Movies</h2>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
