import React, { useContext } from 'react';
import MyInput from '../components/Ui/Input/MyInput';
import MyButton from '../components/Ui/Button/MyButton';
import { AuthContext } from '../context';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);     

  const login = (e) => {
    e.preventDefault();
    setIsAuth(true);   
    localStorage.setItem('auth', 'true')
  };

  return (
    <div>
      <h1>Страница для входа</h1>
      <form onSubmit={login}>
        <MyInput type='text' placeholder='Введите логин' />
        <MyInput type='password' placeholder='Введите пароль' />          
        <MyButton>Войти</MyButton>
      </form> 
    </div>
  );
};

export default Login;
