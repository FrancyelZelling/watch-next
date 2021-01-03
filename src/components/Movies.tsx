import React from "react";
import MovieListItem from "./MovieListItem";
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
      <div className="movielist-component">
        <h2>Your List</h2>
        <div className="movielist-container">
          {movies.map((movie) => (
            <MovieListItem key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
};

export default Movies;
