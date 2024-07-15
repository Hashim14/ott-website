
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  currentMovie: null,
  playing: false,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setCurrentMovie(state, action) {
      state.currentMovie = action.payload;
    },
    setPlaying(state, action) {
      state.playing = action.payload;
    },
  },
});

export const { setMovies, setCurrentMovie, setPlaying } = movieSlice.actions;

export default movieSlice.reducer;
