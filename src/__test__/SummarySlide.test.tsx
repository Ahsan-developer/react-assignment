import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { RootState } from "../store/store";
import Summary from "../components/summarySlide/SummarySlide";

const mockStore = configureStore([]);

describe("Summary Component", () => {
  let store: any;
  const initialState: RootState = {
    answers: {
      answers: [
        {
          question: "What is your favorite color?",
          answer: {
            icon: "🔵",
            label: "Blue",
          },
        },
      ],
    },
    api: {
      queries: {},
      mutations: {},
      provided: {},
      subscriptions: {},
      config: {
        reducerPath: "api",
        online: true,
        focused: true,
        middlewareRegistered: true,
        refetchOnMountOrArgChange: false,
        refetchOnReconnect: false,
        refetchOnFocus: false,
        keepUnusedDataFor: 60, // Example value
        invalidationBehavior: "immediately", // Example value
      },
    },
  };

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("renders Summary component with title and answers", () => {
    render(
      <Provider store={store}>
        <Summary title="Summary Title" />
      </Provider>
    );

    // Check if the title is rendered
    expect(screen.getByText("Summary Title")).toBeInTheDocument();
  });

  test("renders submit button", () => {
    render(
      <Provider store={store}>
        <Summary title="Summary Title" />
      </Provider>
    );

    // Check if the submit button is rendered
    const submitButton = screen.getByText("Submit");
    expect(submitButton).toBeInTheDocument();
  });
});
