import React from "react";
import MovieItem from "./MovieItem";
import { useSelector } from "react-redux";
import { moviesList } from "../features/movie/movieSlice";

const Movies: React.FC = () => {
  const movies = useSelector(moviesList);
  if (movies.length === 0) {
    return (
      <div className="movielist-container">
        <h2>Your List</h2>
        <p>Consider adding movies to your list</p>
      </div>
    );
  } else {
    return (
      <div className="movielist-container">
        <h2>Your List</h2>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
};

export default Movies;
