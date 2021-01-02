import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies, loggedIn } from "../features/movie/movieSlice";
import { Link } from "react-router-dom";

const SearchBar: React.FC = (props) => {
  const [text, setText] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const logged = useSelector(loggedIn);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onSubmit = () => {
    dispatch(searchMovies(text));
    history.push(`/search/${text}`);
  };
  const testFunction = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      dispatch(searchMovies(text));
      history.push(`/search/${text}`);
    }
  };

  return (
    <header>
      <Link to="/home/" className="app-name">
        WatchNext
      </Link>
      <div className="search-section">
        <input
          type="text"
          name="searchbar"
          id=""
          value={text}
          onChange={onChange}
          placeholder="Search Movies..."
          onKeyDown={testFunction}
          className="search-bar"
        />
        <button onClick={onSubmit} className="search-btn">
          Search
        </button>
      </div>
      <div className="login-section">
        {logged ? (
          <button>Logout</button>
        ) : (
          <button>
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </header>
  );
};

export default SearchBar;
