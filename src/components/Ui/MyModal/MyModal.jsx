import React from 'react'
import cls from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {

  const rootClass = [cls.myModal]   

  if(visible){
    rootClass.push(cls.active)  
  }

  return (
    <div className={rootClass.join(' ')} onClick={() =>setVisible(false) }>   
        <div className={cls.myModalContent} onClick={(e) => e.stopPropagation()}>       
         {children}   
        </div>
    </div>
  )
}

export default MyModal       