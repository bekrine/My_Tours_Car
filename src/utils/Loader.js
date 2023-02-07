import React from 'react'
import wheel from '../image/wheel.png'

function loader() {
  return (
    <div className='w-full h-full bg-slate-300 opacity-70 z-[999] absolute top-0'>
        <div className='flex justify-center translate-y-1/2 '>
            <img src={wheel}/>
        </div>
    </div>
  )
}

export default loader