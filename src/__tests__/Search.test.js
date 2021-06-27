import React from "react";
import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: () => {},
  };

  it("renders correctly", () => {
    const { asFragment } = render(
      <Search setSearchResults={validProps.setSearchResults} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders the input", () => {
    render(<Search setSearchResults={validProps.setSearchResults} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("class", "search-form__input");
  });

  it("renders the button", () => {
    render(<Search setSearchResults={validProps.setSearchResults} />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("type", "submit");
  });
});
