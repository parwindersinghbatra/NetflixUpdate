import React from 'react'
import { Banner_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { getId, setOpen } from '../redux/movieSlice'

const MovieCard = ({posterPath, movieId}) => {
  const dispatch = useDispatch()

   if(posterPath === null) return null

   const handleOpen = () =>{
    dispatch(getId(movieId))
      dispatch(setOpen(true))
   }
  return (
    <div className='w-48 pr-2' onClick={handleOpen} >
      <img 
      src={`${Banner_URL}/${posterPath}`}
      alt='movies Banner'
      />
    </div>
  )
}

export default MovieCard