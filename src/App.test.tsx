import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import MultiStepPoll from "./components/multiStepPoll/MultiStepPoll";
import answerReducer from "./store/slices/answerSlice";

// Mock the MultiStepPoll component to simplify testing
jest.mock("./components/multiStepPoll/MultiStepPoll", () => ({
  __esModule: true,
  default: () => <div>Mocked MultiStepPoll Component</div>,
}));

describe("App", () => {
  const renderWithProviders = (ui: React.ReactElement) => {
    const store = configureStore({
      reducer: {
        answers: answerReducer,
      },
    });

    return render(<Provider store={store}>{ui}</Provider>);
  };

  it("renders the MultiStepPoll component", () => {
    const { getByText } = renderWithProviders(<App />);

    expect(getByText("Mocked MultiStepPoll Component")).toBeInTheDocument();
  });
});
