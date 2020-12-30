import React from "react";
import { useSelector } from "react-redux";
import { resultMovies } from "../features/movie/movieSlice";
import MovieItem from "./MovieItem";

const MovieList: React.FC = () => {
  const movies = useSelector(resultMovies);

  return (
    <div className="">
      <h2>Results</h2>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
