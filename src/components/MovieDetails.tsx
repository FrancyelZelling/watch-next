import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findMovie, movieResult } from "../features/movie/movieSlice";
import MovieComponent from "./MovieComponent";

const MovieDetails: React.FC = (props) => {
  const { id } = useParams();
  const movie = useSelector(movieResult);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findMovie(id));
    // eslint-disable-next-line
  }, [id]);

  return (
    <div>
      <h2>Movie Details</h2>
      {movie !== null ? <MovieComponent movie={movie} /> : <h2>not found </h2>}
    </div>
  );
};

export default MovieDetails;
