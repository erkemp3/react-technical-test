import React, { useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";

const Search = () => {
  const [value, setValue] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value);
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-form__input"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-form__button" type="submit">
          Search
        </button>
      </form>
    </>
  );
};

export default Search;
