import React from "react";
import { Movie } from "../features/movie/movieSlice";

interface MovieComponentProps {
  movie: Movie;
}

const MovieComponent: React.FC<MovieComponentProps> = ({ movie }) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={baseImageUrl + movie.poster_path} alt="" />
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieComponent;
