import React from 'react'
import logo from  '../image/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className=' flex justify-between   shadow-md shadow-red-100'>
        <div className='ml-[2%]'>
        <img src={logo} alt='logo'/>
        </div>
        <div className='flex items-center mr-[2%]'>
            <div className='text-2xl p-2'>
                Voiture
            </div>
            <div className=' p-1 border-2 border-slate-900 rounded-full hover:bg-red-100 '>
            <FontAwesomeIcon icon={faUser} className='p-2' />
            </div>
        </div>

    </div>
  )
}

export default Navbar