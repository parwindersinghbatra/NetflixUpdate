import React, { useState } from 'react'
import '../components/Global.css'
import HeaderPage from './HeaderPage'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { API_END_POINT } from '../utils/constant'
import toastr from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '../redux/userSlice'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLoading = useSelector((store) => store.app.isLoading)

     const getInputData = async(e) =>{
        e.preventDefault()
        

        dispatch(setLoading(true))

        const userLoginDetails = {email, password}
        try{
            const res = await axios.post(`${API_END_POINT}/login`, userLoginDetails,({
                headers: {
                    'Content-Type': 'application/json'
                }, 
                withCredentials: true
            }))
            if(res.data.success){
                toastr.success(res.data.message,{
                    duration: 3000,
                    position: 'top-center',
                  });
            }
            if (res.data.user) {
                dispatch(setUser(res.data.user))
                navigate('/browse')
            } else {
                toastr.error('Login successful but no user data received.')
            }
        }
        catch(error){
            toastr.error(error.response.data.message);
 
            // if (error.response) {
 
            //     toastr.error(`Error: ${error.response.data.message}`);
            //     console.error('Response data:', error.response.data);
            //     console.error('Response status:', error.response.status);
            //     console.error('Response headers:', error.response.headers);
            // } else if (error.request) {
 
            //     toastr.error('No response received from server.');
            //     console.error('Request data:', error.request);
            // } else {
 
            //     toastr.error('Error setting up request.');
            //     console.error('Error message:', error.message);
            // }
        } finally {
            dispatch(setLoading(false))
        }
    }
  return (
    <div className='body_part'>
       <div className='flex w-[80%] item-center justify-between main_file'>
       <HeaderPage/>
        </div>
      <div className="parent-login">
            <div className="login-card">
                <h1>Sign In</h1>
                <div className="userInput">
                    <input type="text" name="email"
                           placeholder="Email Address"
                          value={email} 
                          onChange={(e) => 
                            setEmail(e.target.value)
                          }
                           />
                </div>
                <div className="userInput">
                    <input type="password"
                           name="password" 
                           placeholder="Password" 
                           value={password}
                           onChange={(e) => 
                            setPassword(e.target.value)
                        }
                           />
                </div>
                <div className='userInput'>
                    <button className="btn-login" onClick={getInputData}>
                        {isLoading? "Loading...": "Login"}
                    </button>
                </div>
                <div className='userInput or_class text-white'>OR</div>

                <div className="userInput">
                <button className="btn-login2">Use a sign-in code</button>
                </div>
                {/* <div className="remMe">
                    <div>
                        <input type="checkbox"/>
                        <label class="cText"> Remember me</label>
                    </div>
                </div> */}
                <div class="signUp">
                    New to Netflix? <NavLink to='/register' className="sLink">Sign up now</NavLink>
                </div>
            </div>
        </div>
       </div>
  )
}

export default Login
