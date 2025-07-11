import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants.js";
import { useEffect } from "react";
import { addPopularMovies } from "../utils/moviesSlice.js";

const usePopularMovies = () => {
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};
export default usePopularMovies;
