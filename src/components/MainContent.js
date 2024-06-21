import React from 'react'
import VideoTitle from './VideoTitle'
import VidoeBackground from './VidoeBackground'
import {useSelector } from 'react-redux'

const MainContent = () => {
  const movie = useSelector((store) => store.movie?.nowPlayingMovies)

  if(!movie) return;
  const {overview, id, title} = movie[4]
  // const dispatch = useDispatch()
  return (
    <div>
      <VideoTitle overview={overview} title={title}  />
      <VidoeBackground movieId = {id}/>
    </div>
  )
}

export default MainContent
