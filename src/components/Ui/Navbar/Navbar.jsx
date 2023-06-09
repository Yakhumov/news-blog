import React from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../Button/MyButton'
import { useContext } from 'react'
import { AuthContext } from '../../../context'

 const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logOff =()=>{
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className="navbar">
      {isAuth && 
      <MyButton onClick={logOff} >Выйти</MyButton>   
 }
    <div className="navbar_item">
      <Link to="/about ">О сайте </Link>
      <Link to="/posts"> Посты </Link>    
    </div>
  </div>   
  )
}

export default Navbar
