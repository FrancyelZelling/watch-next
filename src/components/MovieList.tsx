import React from "react"
import { useSelector } from "react-redux"
import {moviesList} from "../features/movie/movieSlice"

const MovieList: React.FC = () => {
  const movies = useSelector(moviesList)

  return(
    <div className="">
      <h2>MovieList</h2>
      {movies.map(movie => <h2>{movie.title}</h2>)}
    </div>
  )
}

export default MovieList;