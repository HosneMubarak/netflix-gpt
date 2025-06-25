import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants.js";
import { useEffect } from "react";
import { addUpCommingMovies } from "../utils/moviesSlice.js";

const useUpComingMovies = () => {
  const upComingMovies = useSelector((store) => store.movies.upComingMovies);
  const dispatch = useDispatch();
  const getUpCommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    dispatch(addUpCommingMovies(json.results));
  };
  useEffect(() => {
    !upComingMovies && getUpCommingMovies();
  }, []);
};
export default useUpComingMovies;
