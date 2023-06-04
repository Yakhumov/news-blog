import React from 'react'
import cls from './MyModal.module.css'

const MyModal = ({children, visible}) => {

  const rootClass = [cls.yModal]   

  if(visible){
    rootClass.push(cls.active)  
  }

  return (
    <div className={rootClass.join('')}>   
        <div className={cls.MyModalContent}>     
         {children}   
        </div>
    </div>
  )
}

export default MyModal       