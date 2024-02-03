import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      headers.set("X-API-KEY", process.env.REACT_APP_X_API_KEY ?? "");
      return headers;
    },
  }),
  tagTypes: ["Movies", "Movie"],
  endpoints: () => ({}),
});
