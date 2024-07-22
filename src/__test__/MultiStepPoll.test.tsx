import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import MultiStepPoll from "../components/multiStepPoll/MultiStepPoll";
import { steps } from "../config/steps";
import answerReducer from "../store/slices/answerSlice";
import { IAnswer } from "../types/VerticalCarouselTypes";

// Mock the VerticalCarousel component
jest.mock("../components/verticalCarousel/VerticalCarousel", () => ({
  __esModule: true,
  default: ({ items, handleOptionClick, currentIndex }: any) => (
    <div>
      <div>{items[currentIndex]?.title}</div>
      <button
        onClick={() =>
          handleOptionClick({
            question: items[currentIndex].title,
            answer: { icon: "", label: "Answer" },
          } as IAnswer)
        }
      >
        Next
      </button>
    </div>
  ),
}));

const renderWithProviders = (ui: React.ReactElement) => {
  const store = configureStore({
    reducer: {
      answers: answerReducer,
    },
  });

  return render(<Provider store={store}>{ui}</Provider>);
};

describe("MultiStepPoll", () => {
  it("renders the first step and moves to the next step on option click", () => {
    renderWithProviders(<MultiStepPoll />);

    // Check the first step is rendered
    expect(screen.getByText(steps[0].title)).toBeInTheDocument();

    // Click next button
    fireEvent.click(screen.getByText("Next"));

    // Check the second step is rendered
    expect(screen.getByText(steps[1].title)).toBeInTheDocument();
  });

  it("moves to the summary slide after the last step", () => {
    renderWithProviders(<MultiStepPoll />);

    // Simulate clicking through all steps
    steps.forEach((step, index) => {
      fireEvent.click(screen.getByText("Next"));
      if (index < steps.length - 1) {
        expect(screen.getByText(steps[index + 1].title)).toBeInTheDocument();
      }
    });

    // Check that the summary slide is displayed
    // Assuming the summary slide does not have steps[steps.length].title
    expect(
      screen.queryByText(steps[steps.length - 1].title)
    ).not.toBeInTheDocument();
  });
});
