import { createSlice } from "@reduxjs/toolkit";

const gtpSlice = createSlice({
  name: "gpt",
  initialState: {
    toggleGptSearch: false,
  },
  reducers: {
    addToggleGptSearch: (state) => {
      state.toggleGptSearch = !state.toggleGptSearch;
    },
  },
});

export const { addToggleGptSearch } = gtpSlice.actions;
export default gtpSlice.reducer;
