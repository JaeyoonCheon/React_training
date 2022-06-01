import React from "react";
import { render, screen } from "@testing-library/react";
import "jest-styled-components";

import { Button } from "./index";

describe("<Button/>", () => {
  it("renders component correctly", () => {
    const { container } = render(<Button label="Button Test"></Button>);
    const label = screen.getByText("Button Test");
    expect(label).toBeInTheDocument();

    // eslint-disable-next-line
    const parent = label.parentElement;
    expect(parent).toHaveStyleRule("background-color", "#304FFE");
    expect(parent).toHaveStyleRule("background-color", "#1E40FF", {
      modifier: ":hover",
    });

    expect(container).toMatchSnapshot();
  });

  it("changes backgroundColor and hoverColor Props", () => {
    const backgroundColor = "#FF1744";
    const hoverColor = "#F01440";

    render(
      <Button
        label="Button Test"
        backgroundColor={backgroundColor}
        hoverColor={hoverColor}
      ></Button>
    );

    // eslint-disable-next-line
    const parent = screen.getByText("Button Test").parentElement;
    expect(parent).toHaveStyleRule("background-color", backgroundColor);
    expect(parent).toHaveStyleRule("background-color", hoverColor, {
      modifier: ":hover",
    });
  });
});
