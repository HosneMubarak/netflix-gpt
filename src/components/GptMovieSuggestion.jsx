import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList.jsx";

const GptMovieSuggestion = () => {
  const { gptMovieResults, movieNames } = useSelector((store) => store.gpt);
  if (!gptMovieResults) return null;
  console.log(gptMovieResults);
  return (
    <div className="p-4 m-4 text-white bg-black/70 rounded-lg">
      {movieNames.map((movieName, index) => (
        <MovieList title={movieName} movies={gptMovieResults[index]} />
      ))}
    </div>
  );
};
export default GptMovieSuggestion;
