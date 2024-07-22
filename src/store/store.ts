import { combineReducers, configureStore } from "@reduxjs/toolkit";
import answersReducer from "./slices/answerSlice";
import { SaveAnswerAPI } from "./api/saveAnswers";

export const rootReducer = combineReducers({
  answers: answersReducer,
  [SaveAnswerAPI.reducerPath]: SaveAnswerAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(SaveAnswerAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
