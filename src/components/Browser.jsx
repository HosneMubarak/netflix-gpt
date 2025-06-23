import React from "react";
import Header from "./Header.jsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import MainContainer from "./MainContainer.jsx";

const Browser = () => {
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />
      <MainContainer />
      {/*<SecondaryContainer />*/}
    </div>
  );
};
export default Browser;
