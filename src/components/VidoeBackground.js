import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux'

const VidoeBackground = ({movieId, bool}) => {
  const MovieTrailer = useSelector((store) => store.movie.MovieTrailer)

  useMovieById(movieId)

  return (
    <div className='w-[vm] overflow-hidden'>
      <iframe
      className={`${bool ? "w-[100%]" : "w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${MovieTrailer?.key}?si=XoyadiyaObsfKxhe&autoplay=true&mute=true&start=1`}
         title="YouTube video player" 
         frameborder="0" 
         allowfullScreen
        //  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         allow="fullscreen"
         >
          </iframe>
    </div>
  )
}

export default VidoeBackground
