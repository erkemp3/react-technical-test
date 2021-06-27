import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Search.css";
import getImages from "../requests/getImages";

const Search = ({ setSearchResults, setHasSearched }) => {
  const [value, setValue] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
    setHasSearched(true);
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

Search.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
  setHasSearched: PropTypes.func.isRequired,
};
