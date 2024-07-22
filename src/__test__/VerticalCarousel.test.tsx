// VerticalCarousel.test.tsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "../store/store";
import { ICarouselItem, IAnswer } from "../types/VerticalCarouselTypes";
import VerticalCarousel from "../components/verticalCarousel/VerticalCarousel";

// Create a mock store
const store = createStore(rootReducer);

// Mock data
const items: ICarouselItem[] = [
  {
    title: "Test Item",
    options: [
      { label: "Option 1", icon: "icon1.png" },
      { label: "Option 2", icon: "icon2.png" },
    ],
  },
];

const handleOptionClick = jest.fn();
const currentIndex = 0;

describe("VerticalCarousel", () => {
  it("renders carousel items correctly", () => {
    render(
      <Provider store={store}>
        <VerticalCarousel
          items={items}
          handleOptionClick={handleOptionClick}
          currentIndex={currentIndex}
          setCurrentIndex={() => {}}
        />
      </Provider>
    );

    items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it("renders Summary component when index is out of range", () => {
    render(
      <Provider store={store}>
        <VerticalCarousel
          items={items}
          handleOptionClick={handleOptionClick}
          currentIndex={items.length}
          setCurrentIndex={() => {}}
        />
      </Provider>
    );

    expect(screen.getByText("Summary")).toBeInTheDocument();
  });
});
