import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import {selectTitle, addMovieToList} from "../features/movie/movieSlice"
import { token } from "../config"
import axios from "axios"

interface MovieResult {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
}

const MovieItem: React.FC = () => {
  const title = useSelector(selectTitle)
  const dispatch = useDispatch();

  const addMovie = () => {
    dispatch(addMovieToList({ id: 2,title: "fooo"}))
  }

  return (
    <div className="movie-item">
      <img src="" alt="" />
      <div className="details">
        <h2>{title}</h2>
        <button onClick={addMovie}>Add To List</button>
        <button >View Details</button>
      </div>
    </div>
  );
};

export default MovieItem;
