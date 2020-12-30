import React from "react";
import { useSelector } from "react-redux";
import { resultMovies } from "../features/movie/movieSlice";

const MovieList: React.FC = () => {
  const movies = useSelector(resultMovies);

  return (
    <div className="">
      <h2>MovieList</h2>
      {movies.map((movie) => (
        <h2 key={movie.id}>{movie.title}</h2>
      ))}
    </div>
  );
};

export default MovieList;

