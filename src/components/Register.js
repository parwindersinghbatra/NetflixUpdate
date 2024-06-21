import React, { useState } from 'react'
import HeaderPage from './HeaderPage'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import { API_END_POINT } from '../utils/constant'
import toastr from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../redux/userSlice'

const Register = () => {
  const [UserName, setUserName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const[gender, setGender] = useState("")
  const dispatch = useDispatch()
  
  const navigate = useNavigate()

const isLoading = useSelector((state) => state.app.isLoading)

  const AddNewUser = async (e) =>{
      e.preventDefault()  
      dispatch(setLoading(true))
      // console.log(UserName, email, password, phoneNumber, gender)
      const userDetails = {UserName, email, password, phoneNumber, gender}
      try{
        const res = await axios.post(`${API_END_POINT}/register`, userDetails,({
          headers: {
              'Content-Type': 'application/json'
          }, 
          withCredentials: true
      }));
      
      if(res.data.success === true)
        {
          toastr.success(res.data.message,{
            duration: 3000,
            position: 'top-center'
          });
          navigate('/login')
        }
      
    } catch (error) {
      toastr.error(error.response.data.message);
      console.error(error);
      
    } finally{
      dispatch(setLoading(false))
    }
      setUserName("");
      setEmail("");
      setPassword("");
      setPhoneNumber("");
      setGender("");
  }
  return (
    <div className='body_part'>
       <div className='flex w-[80%] item-center justify-between main_file'>
       <HeaderPage/>
        </div>
      <div className="parent-login">
            <div className="login-card">
                <h1>Register</h1>
                <div className="userInput">
                    <input type="text" name="UserName"
                           placeholder="Enter your Name"
                           value={UserName}
                            onChange={(e)=>{
                              setUserName(e.target.value)
                            }}
                           />
                </div>
                <div className="userInput">
                    <input type="text" name="email"
                           placeholder="Email Address"
                           value={email}
                           onChange={(e)=>{
                            setEmail(e.target.value)
                           }}
                           />
                </div>
                <div className="userInput">
                    <input type="password"
                           name="password" 
                           placeholder="Password" 
                           value={password}
                           onChange={(e)=>{
                            setPassword(e.target.value)
                           }}
                           />
                </div>
                <div className="userInput">
                    <input type="text"
                           name="phoneNumber" 
                           placeholder="Phone Number" 
                           value={phoneNumber}
                           onChange={(e) =>{
                            setPhoneNumber(e.target.value)
                           }}
                           />
                </div>
                <div className="userInput">
                    <div className="select">
                        <select name="gender"
                        value={gender}
                        onChange={(e) =>
                            setGender(e.target.value)}
                        >
                        <option value="" disabled>Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                  
                  </div> 
                </div>
                <div className='userInput'>
                    <button className="btn-login" onClick={AddNewUser}>
                      {
                        isLoading? "Loading...": "Register"
                      }
                      </button>
                </div>
                <div class="signUp">
                    Already have account? <NavLink to='/login' className="sLink">Login here</NavLink>
                </div>
            </div>
        </div>
       </div>
  )
}

export default Register
