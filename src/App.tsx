import React from "react";
import "./App.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import MultiStepPoll from "./components/multiStepPoll/MultiStepPoll";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <MultiStepPoll />
      </div>
    </Provider>
  );
}

export default App;
