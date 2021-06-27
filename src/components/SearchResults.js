import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results) {
    return null;
  }
  if (results.length === 0) {
    return <p>No results</p>;
  }
  return (
    <>
      <div className="image-container">
        {results.map((image) => (
          <img
            key={image.data[0].nasa_id}
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
