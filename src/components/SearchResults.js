import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  }
  return (
    <>
      <p>Search Results</p>
      <img
        className="data-image"
        src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
        alt="space pic"
      />
    </>
  );
};

export default SearchResults;
