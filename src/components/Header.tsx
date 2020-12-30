import React, { useState, ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { findMovie } from "../features/movie/movieSlice";

const SearchBar: React.FC = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const onSubmit = () => {
    dispatch(findMovie(text));
  };

  return (
    <div>
      <label htmlFor="searchbar">Search</label>
      <input
        type="text"
        name="searchbar"
        id=""
        value={text}
        onChange={onChange}
      />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
};

export default SearchBar;
