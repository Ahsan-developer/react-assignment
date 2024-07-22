// __tests__/CarouselItemComp.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {
  ICarouselItem,
  IAnswer,
  IOption,
} from "../types/VerticalCarouselTypes";
import CarouselItem from "../components/verticalCarousel/CarouselItem";

const mockHandleOptionClick = jest.fn();

const item: ICarouselItem = {
  title: "Test Item",
  options: [
    { label: "Option 1", icon: "icon1.png" },
    { label: "Option 2", icon: "icon2.png" },
  ],
};

const answers: IAnswer[] = [
  { question: "Test Item", answer: { label: "Option 1", icon: "icon1.png" } },
];

const setup = (currentIndex = 0) => {
  render(
    <CarouselItem
      item={item}
      index={0}
      currentIndex={currentIndex}
      answers={answers}
      handleOptionClick={mockHandleOptionClick}
    />
  );
};

describe("CarouselItemComp", () => {
  it("renders the item title and options", () => {
    setup();
    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("calls handleOptionClick with the correct option", () => {
    setup();
    fireEvent.click(screen.getByText("Option 1"));
    expect(mockHandleOptionClick).toHaveBeenCalledWith({
      question: "Test Item",
      answer: { label: "Option 1", icon: "icon1.png" },
    });
  });
});
