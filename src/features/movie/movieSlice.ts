import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../../app/store";
import axios from "axios";

interface MovieState {
  title: string;
  resultMovies: Movie[];
  moviesList: Movie[];
}

interface Movie {
  id: number;
  title: string;
}

interface MovieResults {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const initialState: MovieState = {
  title: "ZUpa",
  resultMovies: [
    {
      id: 14,
      title: "fast and furriest",
    },
    {
      id: 123,
      title: "fast and furious 7",
    },
  ],
  moviesList: [
    {
      id: 1,
      title: "foo",
    },
  ],
};

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTBhOWQ3OWU5OTAwMThjNGU1OTBlNWM2MDQ4YmNmMiIsInN1YiI6IjVmZTg4OGUzY2YxYWZkMDAzYzg1MzNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O1dU6Xyq8NDASO58Xhwgemoxw9dmHW-q_Qza2oB968s";

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes

      state.title = "velizes & fuzirosn";
    },
    addMovieToList: (state: MovieState, action: PayloadAction<Movie>) => {
      const check = state.moviesList.find(
        (movie) => movie.id === action.payload.id
      );
      if (check === undefined) {
        state.moviesList.push(action.payload);
      }
    },
    setResults: (state: MovieState, action: PayloadAction<Movie[]>) => {
      state.resultMovies = action.payload;
      console.log(action.payload);
    },
  },
});

export const { increment, addMovieToList, setResults } = movieSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const findMovie = (query: string): AppThunk => async (dispatch) => {
  const response = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json;charset=utf-8",
      },
      params: {
        language: "pt-BR",
        query: query,
      },
    }
  );
  console.log(response);
  const movies: MovieResults = response.data;

  dispatch(setResults(movies.results));
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTitle = (state: RootState) => state.movies.title;
export const moviesList = (state: RootState) => state.movies.moviesList;
export const resultMovies = (state: RootState) => state.movies.resultMovies;

export default movieSlice.reducer;
