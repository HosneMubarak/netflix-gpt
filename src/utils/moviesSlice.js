import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpCommingMovies: (state, action) => {
      state.upCommingMovies = action.payload;
    },
  },
});

export const {
  addUpCommingMovies,
  addTopRatedMovies,
  addPopularMovies,
  addTrailerVideo,
  addNowPlayingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
