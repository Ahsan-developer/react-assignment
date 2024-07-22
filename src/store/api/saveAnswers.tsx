// store/apiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IAnswer } from "../../types/VerticalCarouselTypes";

export const SaveAnswerAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    submitAnswers: builder.mutation<any, IAnswer[]>({
      query: (answers) => ({
        url: "/posts",
        method: "POST",
        body: answers,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useSubmitAnswersMutation } = SaveAnswerAPI;
