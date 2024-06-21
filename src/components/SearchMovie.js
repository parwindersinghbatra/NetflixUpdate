import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { API_END_POINT, Search_Movies, options } from "../utils/constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { setLoading, setUser } from "../redux/userSlice";
import "../components/Global.css";
import { setSearchMovieDetails } from "../redux/searchSlice";
import MovieList from "./MovieList";

const SearchMovie = () => {
  const [searchedMovie, setSearchMovie] = useState("");
  const [searchInitiated, setSearchInitiated] = useState(false);

  const isLoading = useSelector((store) => store.app.isLoading);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.app.user);
  const {movieName, searchMovie} = useSelector((store) => store.searchMovie);


  const loginHandler = async () => {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        dispatch(setUser(""));
        Toaster.success(res.data.message, {
          duration: 3000,
          position: "top-center",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    setSearchInitiated(true);
    try {
      const res = await axios.get(
        `${Search_Movies}${searchedMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      console.log(res.data.results)

      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchedMovie, movies }));
    } catch (error) {
      console.error(error);
    }finally{
      dispatch(setLoading(false))
    }
    setSearchMovie("")
  };
  const homePage = () => {
    navigate("/browse");
  };
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
            <button
              className="bg-red-800 text-white px-4 py-2 ml-2"
              onClick={homePage}
            >
              Home
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-[10%] w-[100%]">
        <form className="w-[50%]" onSubmit={submitHandler}>
          <div className="flex justify-between shadow-md rounded-lg w-[100%]">
            <input
              type="text"
              value={searchedMovie}
              placeholder="Search Moviess...."
              className="w-full outline-none p-2 rounded-md text-lg"
              onChange={(e) => {
                setSearchMovie(e.target.value);
              }}
            />
            <button className="text-white searchMovie" 
            // onClick={submitHandler}
            >
              {
                isLoading ? "Loading..." : "Search"
              }
              </button>
          </div>
        </form>
      </div>
      <div className="mt-[10%] ">
      {searchInitiated && searchMovie?.length === 0 ? (
          <h1 className="text-white text-center">Movie not found</h1>
        ) : (
          searchMovie.length > 0 && <MovieList title={movieName} movies={searchMovie} />
        )}
      </div>
      {/* <div className="text-white">
        <h1>{movieName}</h1>
        {
          searchMovie && searchMovie.map((item)=>{
            console.log(item)
              return <h1 key={item.id}>{item}</h1>
          })
        }
      </div> */}
       
    </div>
  );
};

export default SearchMovie;
