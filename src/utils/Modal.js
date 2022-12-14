import React from 'react'
import {isOpenState} from '../features/Modal/modalSlice'
import {useSelector} from 'react-redux'

function Modal({children}) {
    const isOpen=useSelector(isOpenState)
   
    if(!isOpen)return null
  return (
    <div className='  fixed inset-0 bg-gray-600 bg-opacity-80 overflow-y-auto w-full h-full '>
        <div 
        className='fixed top-[50%] w-full  left-[50%] translate-y-[-50%] translate-x-[-50%] bg-white z-[1000] max-h-96 overflow-scroll sm:w-fit sm:max-h-full'>
            {children}
        </div>
    </div>
  )
}

export default Modal