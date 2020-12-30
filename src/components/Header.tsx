import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { searchMovies } from "../features/movie/movieSlice";

const SearchBar: React.FC = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onSubmit = () => {
    dispatch(searchMovies(text));
  };

  return (
    <div>
      <input
        type="text"
        name="searchbar"
        id=""
        value={text}
        onChange={onChange}
        placeholder="Search Movies..."
      />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
};

export default SearchBar;
