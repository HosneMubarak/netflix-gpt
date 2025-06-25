import React from "react";
import GptSearchBar from "./GptSearchBar.jsx";
import GptMovieSuggestion from "./GptMovieSuggestion.jsx";
import { BG_IMAGE_URL } from "../utils/constants.js";

const GptSearch = () => {
  return (
    <div className="sm: ">
      <div className="fixed -z-20">
        <img src={BG_IMAGE_URL} alt="bg-logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};
export default GptSearch;
