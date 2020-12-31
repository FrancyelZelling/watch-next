import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Movie,
  addMovieToList,
  removeMovieFromList,
} from "../features/movie/movieSlice";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w300";

  const dispatch = useDispatch();

  const addToList = () => {
    dispatch(addMovieToList(movie));
  };

  const removeMovie = () => {
    dispatch(removeMovieFromList(movie.id));
  };

  return (
    <div className="movie-item">
      <img src={baseImageUrl + movie.poster_path} alt="" />
      <div className="details">
        <h2>{movie.title}</h2>
        <button onClick={addToList}>Add To List</button>
        <button onClick={removeMovie}>Remove From List</button>
        <button>
          <Link to={`/movie/${movie.id}`}>View More</Link>
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
