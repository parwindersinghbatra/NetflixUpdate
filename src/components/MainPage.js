import React from 'react'
import '../components/mainPage.css'
import { NavLink } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
const MainPage = () => {
  return (
    <div className='body_part'>
        <div className='flex w-[80%] item-center justify-between  main_file'>
            <img
            src='Netflix-Logo.png'
            alt='netflix logo'
            className='w-36 h-20'
        />
        <div class="flex item-center">
            <div className='ml-4'>
            <select className='select_btn'>
                <option>English</option>
            </select>
            <NavLink to="/login"><button className='buttons'>Sign In</button></NavLink>
        </div>
    </div>
   
        </div>
        <div class="header-content">
            <h1>Unlimited POPCORN, TV shows and more</h1>
            <h3>Watch anywhere. Cancel anytime.</h3>
            <p>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='header-content-email-address'>
            <form action="#" class="email-signup">
                <input type="email" placeholder="Email address" required/>
                <button type="submit">Get Started <GoChevronRight className='icon'/></button>
            </form>
            </div>
        </div>
</div>
  )
}

export default MainPage