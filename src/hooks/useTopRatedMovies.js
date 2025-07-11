import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants.js";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice.js";

const useTopRatedMovies = () => {
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const dispatch = useDispatch();
  const getTopratedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    !topRatedMovies && getTopratedMovies();
  }, []);
};
export default useTopRatedMovies;
