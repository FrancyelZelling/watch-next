import React, { useEffect } from "react";
import { useSelector } from "react-redux"
import {selectTitle} from "../features/movie/movieSlice"

const MovieItem: React.FC = () => {
  const title = useSelector(selectTitle)

  return (
    <div className="movie-item">
      <img src="" alt="" />
      <div className="details">
        <h2>{title}</h2>
        <button>Add To List</button>
        <button>View Details</button>
      </div>
    </div>
  );
};

export default MovieItem;
