import React from "react";
import MovieCard from "./MovieCard.jsx";

const MovieList = ({ title, movies }) => {
  if (!movies) return;
  return (
    <div className="p-6">
      <h1 className="text-4xl text-white py-2 mb-2 px-2">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
              originalTitle={movie.original_title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
