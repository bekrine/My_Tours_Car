import React from 'react'

function StateCar({title,colomStyle,titleStyle,jauge,shema}) {
  return (
    <div className={colomStyle}>
    <div className={titleStyle}><span>ETAT DU VEHICULE A LA {title}</span></div>
    <div className='ml-4 mt-[2px]'>
                <div className='text-xs'><span>R:rayures</span></div>
                <div className='text-xs'><span>B:bosses</span></div>
                <div className='text-xs'><span>E:éclots</span></div>
                <div className='text-xs'><span>C:cassure</span></div>
            </div>
            <div className='flex justify-around h-[50%]'>

            <div className='flex text-xs '>
            <span>carburant</span>
            <img className='border-b border-black' src={jauge} width='80px'  alt='jauge'/>
            </div>
            <img className='border-b border-black' src={shema} width='200px' alt='shema voiture'/>
            </div>
    </div>
  )
}

export default StateCar