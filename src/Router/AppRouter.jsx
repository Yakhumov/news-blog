import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Posts from '../pages/Posts'
import { About } from '../pages/About'
import PostByIdPage from '../components/PostByIdPage'

 const AppRouter = () => {
  return (
    <Routes>
    <Route path="/about" element={<About />} />
    <Route  path="/posts" element={<Posts />} />
    <Route  path="/posts/:id" element={<PostByIdPage/>} />   
  </Routes>
  )
}

export default AppRouter
