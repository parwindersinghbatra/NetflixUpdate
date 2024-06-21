import React from 'react'
import MovieCard from './MovieCard'

const toTitleCase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const MovieList = ({title, movies}) => {
  return (
    <div className='px-8'>
        <p className='text-3xl text-white py-3'>{toTitleCase(title)}</p>
        <div className='flex overflow-x-auto cursor-pointer no-scrollbar'>
            <div className='flex item-center'>
              {
               movies?.map((movie)=>{
                  return (
                    <MovieCard key={movie.id} movieId = {movie.id} posterPath = {movie.poster_path}/>
                  )
                })
              }
            </div>
        </div>
    </div>
  )
}

export default MovieList
