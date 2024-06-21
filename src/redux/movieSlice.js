import {createSlice} from '@reduxjs/toolkit'



const movieSlice = createSlice({
        name: 'movie',
        initialState: {
            nowPlayingMovies:null,
            popularMovie:null,
            topRatedMovie:null,
            upComing:null,
            toggle:false,
            MovieTrailer:null,
            open:false,
            id:""
        },
        reducers:{
            getNowPlayingMovies:(state,action)=>{
                state.nowPlayingMovies = action.payload
            },
            getPopularMovie:(state, action)=>{
                state.popularMovie = action.payload
            },
            getTopRatedMovie:(state, action)=>{
                state.topRatedMovie = action.payload
            },
            getUpComing:(state, action)=>{
                state.upComing = action.payload
            },
            setToggle:(state)=>{
                state.toggle = !state.toggle
            },
            getTrailorMovie:(state, action)=>{
                state.MovieTrailer = action.payload
            },
            setOpen:(state, action)=>{
                state.open = action.payload
            },
            getId:(state, action)=>{
                state.id = action.payload
            }
        }
})

export const {
    getNowPlayingMovies, 
    getPopularMovie, 
    getTopRatedMovie,
    getUpComing, 
    setToggle,
    getTrailorMovie,
    setOpen,
    getId

} = movieSlice.actions

export default movieSlice.reducer