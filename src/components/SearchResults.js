import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({ results, hasSearched }) => {
  if (results.length === 0 && hasSearched === false) {
    return null;
  }
  if (results.length === 0 && hasSearched === true) {
    return <p>Sorry, no results found. Try new search!</p>;
  }

  return (
    <>
      <div className="image-container">
        {results.map((image) => (
          <img
            className="data-image"
            src={image}
            alt="space pics"
            data-testid="data-image"
          />
        ))}
      </div>
    </>
  );
};

export default SearchResults;

SearchResults.propTypes = {
  results: PropTypes.array,
};
