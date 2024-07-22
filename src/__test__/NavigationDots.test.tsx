// __tests__/NavigationDots.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ICarouselItem } from "../types/VerticalCarouselTypes";
import NavigationDots from "../components/verticalCarousel/NavigationDots";

const items: ICarouselItem[] = [
  { title: "Item 1", options: [] },
  { title: "Item 2", options: [] },
  { title: "Item 3", options: [] },
];

const mockScrollToItem = jest.fn();

const setup = (currentIndex = 0) => {
  render(
    <NavigationDots
      items={items}
      currentIndex={currentIndex}
      scrollToItem={mockScrollToItem}
    />
  );
};

describe("NavigationDots", () => {
  it("renders the correct number of dots", () => {
    setup();
    const dots = screen.getAllByRole("button");
    expect(dots).toHaveLength(items.length);
  });

  it("highlights the current dot", () => {
    setup(1);
    const dots = screen.getAllByRole("button");
    expect(dots[1]).toHaveClass("bg-none");
    expect(dots[0]).toHaveClass("bg-white");
    expect(dots[2]).toHaveClass("bg-white");
  });

  it("calls scrollToItem when a dot is clicked", () => {
    setup();
    fireEvent.click(screen.getAllByRole("button")[2]);
    expect(mockScrollToItem).toHaveBeenCalledWith(2);
  });
});
