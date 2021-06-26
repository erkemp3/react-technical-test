import React, { useState } from "react";
import "../styles/Search.css";

const Search = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <form className="search-form">
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
