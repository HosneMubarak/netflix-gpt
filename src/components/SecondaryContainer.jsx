import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList.jsx";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="pl-12 -mt-50 relative z-20">
        <MovieList
          title={"Now Playing Movies"}
          movies={movies.nowPlayingMovies}
        />
        <MovieList title={"Up Coming"} movies={movies?.upCommingMovies} />
        <MovieList title={"Most Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
