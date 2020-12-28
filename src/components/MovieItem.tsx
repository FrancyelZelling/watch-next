import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import {selectTitle, addMovieToList} from "../features/movie/movieSlice"

const MovieItem: React.FC = () => {
  const title = useSelector(selectTitle)
  const dispatch = useDispatch();

  const movie = { title: "fuurr" }

  const addMovie = () => {
    dispatch(addMovieToList({ id: 2,title: "fooo"}))
  }

  return (
    <div className="movie-item">
      <img src="" alt="" />
      <div className="details">
        <h2>{title}</h2>
        <button onClick={addMovie}>Add To List</button>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default MovieItem;
