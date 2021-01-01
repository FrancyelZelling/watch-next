import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { searchMovies } from "../features/movie/movieSlice";
import { Link } from "react-router-dom";

const SearchBar: React.FC = (props) => {
  const [text, setText] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();

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
    <div>
      <Link to="/">Home</Link>
      <input
        type="text"
        name="searchbar"
        id=""
        value={text}
        onChange={onChange}
        placeholder="Search Movies..."
        onKeyDown={testFunction}
      />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
};

export default SearchBar;
