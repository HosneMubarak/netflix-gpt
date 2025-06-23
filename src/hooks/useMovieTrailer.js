import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants.js";
import { addTrailerVideo } from "../utils/moviesSlice.js";

const UseMovieTrailer = ({ movieId }) => {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS,
    );
    const json = await data.json();
    const filterVideos = json.results.filter(
      (video) => video.type === "Trailer" && video.name === "Official Trailer",
    );
    const trailer = filterVideos.length ? filterVideos[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};
export default UseMovieTrailer;
