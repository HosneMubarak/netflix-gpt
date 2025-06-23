import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants.js";

const MovieCard = ({ posterPath, originalTitle }) => {
  return (
    <div className="w-48 pr-4">
      <img src={IMAGE_CDN_URL + posterPath} alt={originalTitle} />
    </div>
  );
};
export default MovieCard;
