import React from "react";
import { Movie } from "../features/movie/movieSlice";

interface MovieItemProps {
  movie: Movie;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/w300";

  return (
    <div className="movie-item">
      <img src={baseImageUrl + movie.poster_path} alt="" />
      <div className="details">
        <h2>{movie.title}</h2>
        <button>Add To List</button>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default MovieItem;
