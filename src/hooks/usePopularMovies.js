import axios from "axios";

import { Popular_Movie, options } from "../utils/constant";
import { useDispatch } from "react-redux";
import { getPopularMovie } from "../redux/movieSlice";

const usePopularMovies = async () => {
  const dispatch = useDispatch();
  try {
    const res = await axios.get(Popular_Movie, options);
    dispatch(getPopularMovie(res.data.results));
  } catch (error) {}
};

export default usePopularMovies;
