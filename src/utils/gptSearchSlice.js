import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
    gptMovies: null,
    gptMovieNames: null,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptSearchMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovieNames = movieNames;
      state.gptMovies = movieResults;
    },
  },
});

export const { toggleGptSearch, addGptSearchMovies } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
