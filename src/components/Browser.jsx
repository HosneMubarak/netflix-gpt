import React from "react";
import Header from "./Header.jsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import SecondaryContainer from "./SecondaryContainer.jsx";
import usePopularMovies from "../hooks/usePopularMovies.js";
import MainContainer from "./MainContainer.jsx";
import useTopratedMovies from "../hooks/useTopRatedMovies.js";
import useUpComingMovies from "../hooks/useUpComingMovies.js";

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
export default Browser;
