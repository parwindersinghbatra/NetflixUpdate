import React from 'react'
// import { FaUser } from "react-icons/fa";


const HeaderPage = () => {
  return (
    <div className='flex w-[100%] item-center justify-between'>
            <img
            src='Netflix-Logo.png'
            alt='netflix logo'
            className='w-36 h-20'
        />
        {/* <div class="flex item-center mt-4">
            <FaUser className='mt-2 mr-1'/>
            <h2 className='text-lg text-bold'>
                Batra Saab</h2>
            <div className='ml-4'>
            <button className='bg-red-800 text-white px-4 py-2 '>Logout</button>
            <button className='bg-red-800 text-white px-4 py-2 ml-2'>Search Movies</button>
            </div>
            
        </div> */}
    </div>
  )
}

export default HeaderPage
