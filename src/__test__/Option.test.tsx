// __tests__/Option.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { IOptionProps } from "../types/VerticalCarouselTypes";
import Option from "../components/verticalCarousel/Option";

const setup = (props: IOptionProps) => {
  render(<Option {...props} />);
};

describe("Option", () => {
  it("renders the option with the provided icon and label", () => {
    const props: IOptionProps = {
      option: { label: "Option Label", icon: "🌟" },
      isSelected: false,
      onClick: jest.fn(),
    };
    setup(props);

    expect(screen.getByText("Option Label")).toBeInTheDocument();
    expect(screen.getByText("🌟")).toBeInTheDocument();
  });

  it("applies the correct styles when selected", () => {
    const props: IOptionProps = {
      option: { label: "Option Label", icon: "🌟" },
      isSelected: true,
      onClick: jest.fn(),
    };
    setup(props);
    expect(screen.getByText("Option Label")).toHaveClass("opacity-100");
  });

  it("applies the correct styles when not selected", () => {
    const props: IOptionProps = {
      option: { label: "Option Label", icon: "🌟" },
      isSelected: false,
      onClick: jest.fn(),
    };
    setup(props);
    expect(screen.getByText("Option Label")).toHaveClass("opacity-0");
  });

  it("calls onClick when the option is clicked", () => {
    const mockOnClick = jest.fn();
    const props: IOptionProps = {
      option: { label: "Option Label", icon: "🌟" },
      isSelected: false,
      onClick: mockOnClick,
    };
    setup(props);
    fireEvent.click(screen.getByText("Option Label"));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
