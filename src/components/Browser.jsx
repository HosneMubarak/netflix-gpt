import React from "react";
import Header from "./Header.jsx";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import usePopularMovies from "../hooks/usePopularMovies.js";
import useTopratedMovies from "../hooks/useTopRatedMovies.js";
import useUpComingMovies from "../hooks/useUpComingMovies.js";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer.jsx";
import SecondaryContainer from "./SecondaryContainer.jsx";
import GptSearch from "./GptSearch.jsx";

const Browser = () => {
  const showGptSearch = useSelector((store) => store.gpt.toggleGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpComingMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
export default Browser;
