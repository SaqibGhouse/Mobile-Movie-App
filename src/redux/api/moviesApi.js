import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://www.omdbapi.com/",
  }),
  endpoints: (builder) => ({
    getMoviesList: builder.query({
      query: (movieText) => `?apikey=19cdb1a4&s=${movieText}`,
    }),
    getMovieDetailByID: builder.query({
      query: (id) => `?apikey=19cdb1a4&i=${id}`,
    }),
  }),
});

export const { useGetMoviesListQuery, useGetMovieDetailByIDQuery } = moviesApi;
