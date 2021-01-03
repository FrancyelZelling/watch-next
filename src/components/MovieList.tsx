import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { resultMovies } from "../features/movie/movieSlice";
import MovieItem from "./MovieItem";

const MovieList: React.FC = () => {
  const movies = useSelector(resultMovies);
  const { query } = useParams<{ query: string }>();

  if (movies.length === 0) {
    return <div></div>;
  } else {
    return (
      <div className="search-results-component">
        <h2>Results for {query}</h2>
        <div className="search-results-container">
          {movies.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
};

export default MovieList;
