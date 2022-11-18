import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../image/logo.png'


function Navbar() {
  const [dropList,setDropList]=useState(false)
  const [dropLis2,setDropList2]=useState(false)

  return (
    <nav className='px-2 bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>

    <div className='container flex flex-wrap justify-between items-center mx-auto'>
      <div className='flex items-center'>
        <img src={logo} alt='logo' />
      </div>
      <div className='relative flex items-center mr-[2%]'>
      <button 
      onClick={()=>setDropList(!dropList)}
       className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Voiture <svg className="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
      <div  className={`${dropList ? 'absolute' :'hidden'} top-[80%] left-[23%] z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  <li>
                    <Link to={'/addCarInfo'} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ajouter Voiture</Link>
                  </li>
                </ul>
            </div>
      </div>
      <div className='relative flex items-center mr-[2%]'>
      <button 
      onClick={()=>setDropList2(!dropLis2)}
       className="flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Client <svg className="ml-1 w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
      <div  className={`${dropLis2 ? 'absolute' :'hidden'} top-[80%] left-[23%] z-10 w-44 font-normal bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className="py-1 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                  
                  <li>
                    <Link to={'/addClient'} className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ajouter client</Link>
                  </li>
              
                </ul>
            </div>
      </div>


        <div className=' p-1 border-2 border-slate-900 rounded-full hover:bg-red-100 '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>

        </div>


    </div>
    </nav>

  )
}

export default Navbar