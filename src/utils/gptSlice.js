import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGptSearch: false,
    gptMovieResults: null,
    movieNames: null,
  },
  reducers: {
    addToggleGptSearch: (state) => {
      state.toggleGptSearch = !state.toggleGptSearch;
    },
    addgptMovies: (state, action) => {
      const { gptMovieResults, movieNames } = action.payload;
      state.gptMovieResults = gptMovieResults;
      state.movieNames = movieNames;
    },
  },
});

export const { addgptMovies, addToggleGptSearch } = gtpSlice.actions;
export default gtpSlice.reducer;
