import React,{useRef} from 'react'
import logo from '../../image/logo.jpeg'
import logoMytours from '../../image/logoMYtours.png'
import jauge from '../../image/jauge_carburant1.jpeg'
import shema from '../../image/schema-vehicule1.jpeg'
import { useSelector } from 'react-redux'
import { AllClient } from '../../features/AddClient/ClientSlice'
import {useReactToPrint} from "react-to-print"

import Driver from './contractComponent/Driver'
import DiscriptionCar from './contractComponent/DiscriptionCar'
import Equipments from './contractComponent/Equipments'
import Payment from './contractComponent/Payment'
import Signatur from './contractComponent/Signatur'
import StateCar from './contractComponent/StateCar'

function Print() {
    const titleStyle='text-center text-lg font-semibold border-b border-black'
    const colomStyle='border border-black h-[180px] overflow-hidden'

    const oneElementStyle='text-xs mb-[2px] font-bold ml-8'
    const towElementsStyle='text-xs  mb-[2px] font-bold flex justify-around'

    const inputStyle='grid grid-cols-2 text-sm font-semibold'
    const inputItems='ml-12'

    const ContractRef=useRef()
    const AllInfo=useSelector(AllClient)
    const {contract,info,infoCar,secondDriver}=AllInfo

    const imprimer=useReactToPrint({
        content:()=>ContractRef.current
    })

  return (
      <>
    <div ref={ContractRef} className='w-full h-[1122px]  p-[5px] mx-auto'>
        <div className='grid grid-flow-col h-[180px] overflow-hidden auto-cols-[1fr]'>
            <div className='border border-black'>
                <div className='border-b border-black flex  justify-center '>
                    <img src={logoMytours} className='border-y border-black' width="130px" alt='logo Mytours '/>
            <p className='text-gl text-center font-semibold '>MY TOURS CAR</p>
                </div>
                <div className='border-b border-black   '>
                    <p className='text-center text-gl'>Rue des Far Lot du centre N°69 Ouarzazate 45000</p>
                </div>
                <div className='  flex flex-col items-center '>
                    <div>GSM:+212 07 02 22 64 84</div>
                    <div>GSM:+212 06 57 41 86 47</div>
                    <div>E-mail: mytourscar@gmail.com</div>
                </div>
            </div>
            <div className='flex items-center border-l border-black justify-center'>
            <img src={logo} width='130px'  alt='logo'/>
            <p className='text-2xl text-center '>جمعية جهة درعة تافيلالت لكراء السيارات</p>
            </div>
            <div className='border border-black flex flex-col '>
                <div className='text-xl m-2'>Contrat N°: {contract?.N_de_contrat}</div>
                <div className='text-xl flex flex-row mb-2'>
                <div className='mr-6 ml-2'>Le : {contract?.date_de_contrat}</div> 
                <div className='ml-2'>A : {contract?.lieux_de_contrat}</div>
                </div>
                <div className='' >
                <p className='text-center text-sm'>Ce contrat doit accomagner le véhicule pendant tout la durée de location, afin d'être présenté à toute réquisition des services de police ou de gendarmerie </p>
                </div>
            </div>
        </div>
        <div className='grid grid-cols-2 '>
            <Driver infoDriver={info} title={'1er CONDUCTEUR'} colomStyle={colomStyle} titleStyle={titleStyle} oneElementStyle={oneElementStyle} towElementsStyle={towElementsStyle}/>
            {/* first */}
            <Driver infoDriver={secondDriver} title={'2éme CONDUCTEUR'} colomStyle={colomStyle} titleStyle={titleStyle} oneElementStyle={oneElementStyle} towElementsStyle={towElementsStyle}/>
            {/* secondDriver */}
            <DiscriptionCar infoCar={infoCar} contract={contract} colomStyle={colomStyle} titleStyle={titleStyle} oneElementStyle={oneElementStyle} towElementsStyle={towElementsStyle} />
            {/* discription */}
            <Equipments infoCar={infoCar} colomStyle={colomStyle} titleStyle={titleStyle} inputItems={inputItems} inputStyle={inputStyle} towElementsStyle={towElementsStyle}/>
            {/* EQUIPEMENT */}  
          {/* StateCarDelivery */}
           <StateCar title={'REPRISE'} colomStyle={colomStyle} titleStyle={titleStyle} jauge={jauge} shema={shema}/>
          {/* StateCarReprise */}
           <StateCar title={'LIVRAION'}  colomStyle={colomStyle} titleStyle={titleStyle} jauge={jauge} shema={shema}/>
        </div>
        <Payment contract={contract} titleStyle={titleStyle} colomStyle={colomStyle}/>
      {/* payment */}
      <Signatur colomStyle={colomStyle}/>
       {/* Signatur */}
        <div className='h-[50px] border-x border-b  border-black'>
            <p className='text-center text-xs'>

كل ضرر يـمـس الـشـركـة خــلال مـدة الـكـراء مـن طـرف المستاجر سيعرضه للمساءلة الإدارية والقانونية إلى حين جبر الضرر مع أداء جميع المصاريف الناتجة عن ذلك
            </p>
            <p className='text-center text-xs'>
            
Chaque dommage touch la Société pendant la période de location, locataire sera exposé à la responsabilité administrative et judiciaire
jusqu'à décision finale, ainsi le paiement de tous les frais résultants
            </p>
        </div>
    </div>
    <div>
        <button className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
         onClick={imprimer}>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
</svg>

            <span>
                 Imprimer
                </span>
                 </button>
    </div>
    </>

  )
}

export default Print