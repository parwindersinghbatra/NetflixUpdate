import React from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Login from './Login'


import BrowsePage from './BrowsePage'
import MainPage from './MainPage'
import Register from './Register'
import SearchMovie from './SearchMovie'

const Body = () => {
    const appRouter = createBrowserRouter([
        {path:"/", element:<MainPage/>},
        {path: "/login", element: <Login/>},
        {path: "/browse", element:<BrowsePage/>},
        {path:"/register", element:<Register/>},
        {path:"/search", element:<SearchMovie/>}
    ])
  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body
