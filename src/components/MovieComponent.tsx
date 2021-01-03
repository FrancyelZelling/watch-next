import React from "react";
import { Movie } from "../features/movie/movieSlice";
import { useDispatch } from "react-redux";
import {
  addMovieToList,
  setLocalStorageMovies,
} from "../features/movie/movieSlice";

interface MovieComponentProps {
  movie: Movie;
}

const MovieComponent: React.FC<MovieComponentProps> = ({ movie }) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w780";
  const dispatch = useDispatch();

  const addToList = () => {
    dispatch(addMovieToList(movie));
    dispatch(setLocalStorageMovies());
  };

  return (
    <div className="movie-component">
      <h2>{movie.title}</h2>
      <img src={baseImageUrl + movie.poster_path} alt="" />
      <p>{movie.overview === "" ? "Description Not Found" : movie.overview}</p>
      <button onClick={addToList} className="btn-main">
        Add To List
      </button>
    </div>
  );
};

export default MovieComponent;
