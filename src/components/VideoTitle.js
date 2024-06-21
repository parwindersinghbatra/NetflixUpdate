import React from 'react'
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='absolute pt-[18%] p-12 w-[vw] aspect-video'>
      <h1 className='text-3xl font-bold text-white'> {title}</h1>
      <p className='text-white w-1/3 mt-3'>{overview}</p>

      <div className='mt-8 flex'>
        <button className='bg-white text-black px-6 py-2 rounded-md hover:bg-opacity-80 flex item-center'>
        <FaPlay size='14px' className='mt-1 mr-2'/>
        <span>Play</span>
            </button>
        <button className='bg-white text-black px-6 py-2 bg-grey-500 bg-opacity-50 rounded-md hover:bg-opacity-80 flex item-center ml-2'>
        <CiCircleInfo size='23px' className='mr-2'/>
        <span>
        Watch more
        </span>
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
