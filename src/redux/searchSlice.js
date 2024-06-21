import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    movieName: "",
    searchMovie: [],
  },
  reducers: {
    setSearchMovieDetails: (state, action) => {
      const { searchedMovie, movies } = action.payload;
      // state.searchMovie = action.payload
      state.movieName = searchedMovie;
      state.searchMovie = movies;
    },
  },
});

export const { setSearchMovieDetails } = searchSlice.actions;

export default searchSlice.reducer;
