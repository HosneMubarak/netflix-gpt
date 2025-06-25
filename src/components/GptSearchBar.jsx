import React, { useRef } from "react";
import lang from "../utils/languageConstants.js";
import { useDispatch, useSelector } from "react-redux";
import groq from "../utils/groq.js";
import { API_OPTIONS } from "../utils/constants.js";
import { addgptMovies } from "../utils/gptSlice.js";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLang = useSelector((store) => store.config.lang);
  const searchValueRef = useRef(null);
  const fetchTmdbMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    const gptQuery =
      "You are a personalized movie recommendation assistant. Your job is to suggest movies based on the user's preferences such as genre, mood, actors, director, language, or similar movies they liked. Please give exactly 5 movie names only, separated by commas. Do not include any extra details like year, description, or reasons.\n" +
      "\n" +
      "Example output:\n" +
      "Inception, The Matrix, Interstellar, Arrival, Blade Runner 2049\n";
    const getGroqResponse = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: gptQuery + searchValueRef.current.value,
        },
      ],
      model: "llama-3.3-70b-versatile",
    });
    const gptMovieList =
      getGroqResponse?.choices[0]?.message?.content.split(",");
    const tmdbMovieList = await gptMovieList.map((m) => fetchTmdbMovies(m));
    const promiseTmdbMovieData = await Promise.all(tmdbMovieList);
    dispatch(
      addgptMovies({
        gptMovieResults: promiseTmdbMovieData,
        movieNames: gptMovieList,
      }),
    );
  };
  return (
    <div className="pt-[20%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchValueRef}
          type="text"
          className="p-4 m-4 col-span-9 text-white rounded-lg"
          placeholder={lang[selectedLang].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[selectedLang].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
