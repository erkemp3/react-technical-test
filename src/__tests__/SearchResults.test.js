import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  const validProps = {
    results: [
      {
        data: [
          {
            nasa_id: "PIA08110",
            title: "Titan Viewed by Cassini Radar",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA08110/PIA08110~thumb.jpg",
          },
        ],
      },
      {
        data: [
          {
            nasa_id: "PIA08111",
            title: "Titan Viewed by Cassini Radar",
          },
        ],
        links: [
          {
            href: "https://images-assets.nasa.gov/image/PIA08110/PIA08110~thumb.jpg",
          },
        ],
      },
    ],
  };

  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("returns the search results", () => {
    const { getAllByTestId } = render(
      <SearchResults results={validProps.results} />
    );
    expect(getAllByTestId("data-image")).toHaveLength(2);
  });
});
