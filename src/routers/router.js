import { About } from "../pages/About"
import Posts from "../pages/Posts"
import PostByIdPage from "../components/PostByIdPage"
import Login from "../pages/Login"
import { Navigate } from "react-router-dom"  


export const privateRoutes = [
    { path: '/about', component: <About /> },
    { path: '/posts', component: <Posts /> },
    { path: '/posts/:id', component: <PostByIdPage /> },  
    { path: '/', component: <Navigate to="/posts" /> }, 

]


export const publicRoutes = [
    {path : '/login', component: <Login/>} ,   
    { path: '/', component: <Navigate to="/login" /> },
    { path: '*', component: <Login /> }, 
]