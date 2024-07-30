import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { moviesApi } from "./services/movieListApi";

const store = configureStore({
  reducer: {
    movies: movieReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
setupListeners(store.dispatch);
export default store;
