import axios from "axios";
import { useDispatch } from "react-redux";
import { getNowPlayingMovies } from "../redux/movieSlice";
import { Now_Playing_Movie, options } from "../utils/constant";


const useNowPlayingMovies = async () => {
    const dispatch = useDispatch()
  try {
    const res = await axios.get(Now_Playing_Movie, options );
    dispatch(getNowPlayingMovies(res.data.results));
    
  } catch (error) {
    console.error(error);
  }
};

export default useNowPlayingMovies