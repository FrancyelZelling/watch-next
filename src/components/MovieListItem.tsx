import React from "react";
import { useDispatch } from "react-redux";
import {
  Movie,
  setLocalStorageMovies,
  removeMovieFromList,
} from "../features/movie/movieSlice";

interface MovieItemProps {
  movie: Movie;
}

const MovieListItem: React.FC<MovieItemProps> = ({ movie }) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w300";

  const dispatch = useDispatch();

  const removeMovie = () => {
    dispatch(removeMovieFromList(movie.id));
    dispatch(setLocalStorageMovies());
  };

  return (
    <div className="movie-item">
      <img src={baseImageUrl + movie.poster_path} alt="" />
      <div className="details">
        <h2>{movie.title}</h2>
        <button onClick={removeMovie}>Remove Movie</button>
      </div>
    </div>
  );
};

export default MovieListItem;
