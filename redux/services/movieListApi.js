import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const baseQueryWithHeaders = fetchBaseQuery({
  baseUrl: "https://api.themoviedb.org/3",
  prepareHeaders: (headers) => {
    const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;
    if (token) {
      headers.set("accept", "application/json");
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

//TODO: server app implementation to resolve hydration
function isHydrateAction(action) {
  return action.type === HYDRATE;
}

export const moviesApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithHeaders,
  extractRehydrationInfo(action, { reducerPath }) {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (builder) => ({
    getAllMovies: builder.query({
      query: () => "/trending/all/day?language=en-US",
    }),
    getSelectedMovie: builder.query({
      query: (id) => `/movie/${id}?language=en-US`,
    }),
    selectedMovieVideo: builder.query({
      query: (id) => `movie/${id}/videos?language=en-US`,
    }),
    selectedMovieCredits: builder.query({
      query: (id) => `/movie/${id}/credits?language=en-US`,
    }),
  }),
});

export const {
  useGetAllMoviesQuery,
  useGetSelectedMovieQuery,
  useSelectedMovieVideoQuery,
  useSelectedMovieCreditsQuery
} = moviesApi;
