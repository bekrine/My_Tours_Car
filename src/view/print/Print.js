import React from 'react'
import logo from '../../image/logo.jpeg'
import logoMytours from '../../image/logoMYtours.jpeg'

function Print() {
  return (
    <div className='w-[80%] mt-10 mx-auto'>
        <div className='flex justify-evenly  w-full '>
            <div className=''>
                <div className='border-2 border-black flex  justify-center '>
                    <img src={logoMytours} alt='logo Mytours '/>
            <p className='text-2xl text-center '>MY TOURS CAR</p>
                </div>
                <div className='border-2 border-black   '>
                    <p className='text-center'>Rue des Far Lot du centre N°69 Ouarzazate 45000</p>
                </div>
                <div className='border-2 border-black flex flex-col items-center '>
                    <div>GSM:+212 07 02 22 54 84</div>
                    <div>E-mail: mytourscar@gmail.com</div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
            <img src={logo}  alt='logo'/>
            <p className='text-2xl text-center '>جمعية جهة درعة تافيلالت لكراء السيارات</p>
            </div>
            <div className='border-2 border-black flex flex-col '>
                <div className='text-xl m-2'>Contrat N°:</div>
                <div className='text-xl flex flex-row mb-2'>
                <div className='mr-6'>Le :11/11/1111</div> 
                <div>A :OUARZAZATE</div>
                </div>
                <div className='' >
                <p className='text-center text-sm'>Ce contrat doit accomagner le véhicule pendant tout la durée de location, afin d'être présenté à toute réquisition des services de police ou de gendarmerie </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Print