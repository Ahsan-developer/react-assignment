// src/store/answersSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAnswer } from "../../types/VerticalCarouselTypes";

interface AnswersState {
  answers: IAnswer[];
}

const initialState: AnswersState = {
  answers: [],
};

const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    addOrUpdateAnswer(state, action: PayloadAction<IAnswer>) {
      const index = state.answers.findIndex(
        (answer) => answer.question === action.payload.question
      );
      if (index !== -1) {
        // Update the existing answer
        state.answers[index] = action.payload;
      } else {
        // Add a new answer
        state.answers.push(action.payload);
      }
    },
    clearAnswers(state) {
      state.answers = [];
    },
  },
});

export const { addOrUpdateAnswer, clearAnswers } = answersSlice.actions;

export default answersSlice.reducer;
