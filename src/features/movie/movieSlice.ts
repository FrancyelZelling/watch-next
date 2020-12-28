import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';

interface MovieState {
  title: string;
  resultMovies: Movie[]
}

interface Movie {
  title: string;
}

const initialState: MovieState = {
  title: "ZUpa",
  resultMovies : [
    {
      title: "fast and furriest"
    },
    {
      title: "fast and furious 7"
    }
  ]
};


export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    
    state.title = "velizes & fuzirosn"
  },
}});

export const { increment} = movieSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectTitle = (state: RootState) => state.movies.title;

export default movieSlice.reducer;
