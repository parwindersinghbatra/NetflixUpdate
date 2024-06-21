import axios from "axios"
import { useDispatch } from "react-redux"
import { Upcoming_Movie, options } from "../utils/constant"
import { getUpComing } from "../redux/movieSlice"

const useUpcomingMovies = async () =>{
    const dispatch = useDispatch()
    try{    
        const res = await axios.get(Upcoming_Movie, options)
        dispatch(getUpComing(res.data.results))
    }catch(error){
        console.error("Upcoming movies", error)
    }
}

export default useUpcomingMovies