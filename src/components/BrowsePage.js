import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUser } from "react-icons/fa";
import "../components/Global.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import { setUser } from "../redux/userSlice";
import toastr from "react-hot-toast";
import MovieContent from "./MovieContent";
import MainContent from "./MainContent";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useToratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
// import { setToggle } from "../redux/movieSlice";
// import SearchMovie from "./SearchMovie";

const BrowsePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.app.user);
  // const toggle  = useSelector((store) => store.app.toggle)
  // const movieStore = useSelector((store) => store.movie)
  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies()
  useUpcomingMovies()

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  const loginHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(""));
        navigate("/login");
        toastr.success(res.data.message, {
          duration: 3000,
          position: "top-center",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleHandler = () => {
    navigate("/search")
    // dispatch(setToggle())
  }
  return (
    <div className="body_part">
      <div className="flex w-[94%] item-center justify-between main_file absolute left-[3.5%]">
        <img src="Netflix-Logo.png" alt="netflix logo" className="w-36 h-20" />
        <div class="flex item-center mt-4">
          <FaUser className="mt-2 mr-1 text-white" />
          {user ? (
            <h2 className="text-lg text-bold text-white"> {user.UserName}</h2>
          ) : (
            <h2 className="text-lg text-bold text-white"> Unknown User</h2>
          )}
          <div className="ml-4">
            <button
              className="bg-red-800 text-white px-4 py-2"
              onClick={loginHandler}
            >
              Logout
            </button>
            <button className="bg-red-800 text-white px-4 py-2 ml-2"
              onClick={toggleHandler}
            >
              Search Movies
            </button>
          </div>
        </div>
      </div>
      <div>
         <MainContent />
         <MovieContent />
      </div>
    </div>
  );
};
export default BrowsePage;
