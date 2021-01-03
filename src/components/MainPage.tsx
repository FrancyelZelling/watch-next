import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getLocalStorageMovies } from "../features/movie/movieSlice";
import Movies from "./Movies";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getLocalStorageMovies());
  });

  return (
    <Router>
      <Switch>
        <div className="App">
          <Movies />
        </div>
      </Switch>
    </Router>
  );
};

export default MainPage;
