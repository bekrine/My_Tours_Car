import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggelModal } from '../../features/Modal/modalSlice'
import { useGetCarsMaintenanceQuery } from '../../services/car'
import Modal from '../../utils/Modal'
import {Table,TableBody,TableHeadr,TableTd,TableTh, TableTr} from '../../utils/table'
import MaintenanceForm from './MaintenanceForm'

function Maintenance() {
    const matRef=useRef()
    const [filterMat,setFilterMat]=useState([])
    const title=[ 'Matricule',
    'date entretient',
    'entretient',
    'date prochain entretient',
    'km lors entretient',
    'km pour prochain',
    'km total',
    'montant entretient']
    
    const {data}=useGetCarsMaintenanceQuery()
    let options=data?.map(mat=>{
        return(
            <option key={mat.id} value={mat.Matricule}>{mat.Matricule}</option>
            )
        })
        
                    const chang=(e)=>{
                  if(matRef.current.value !== ""){
                            setFilterMat(data.filter(v=>v.Matricule === e.target.value))
                }return  
                }


    let content
    content=filterMat?.map(car=>{
        if(car.maintenance !== undefined ){
      return(car.maintenance.map((c,i)=>{
           return ( 
               <TableTr key={i}>
                   <TableTd  tableTd={c.Matricule}/>
                   <TableTd  tableTd={c.date_entretient}/>
                   <TableTd  tableTd={c.entretient}/>
                   <TableTd  tableTd={c.date_prochain_entretient}/>
                   <TableTd  tableTd={c.km_lors_entretient}/>
                   <TableTd  tableTd={c.km_pour_prochain}/>
                   <TableTd  tableTd={c.km_total}/>
                   <TableTd  tableTd={`${c.montant_entretient} DH`}/> 
                </TableTr> 
                )
               }))
        }
    })
   
        
const dispatch=useDispatch()

  return (

      <>
               <div className='block mx-3 mb-6  md:flex mx-3 mb-6'>
                   <div className='w-full p-2 mt-2'>

                 <select 
                 onChange={(e)=>chang(e)}
                 ref={matRef}
                 className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" '>
        <option value=''>Choiser une voiture</option>
        {
            options
        }
        </select>        
        </div>
        
                <div className='w-full flex justify-center my-6 md:w-1/2 px-3 mb-6 md:mb-0'>
                    
                                    <button
                                 onClick={()=>dispatch(toggelModal())}
                                className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5  mr-2  dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800'
                                type='button'>Ajouter Entretient</button>
                                </div>
        </div>
       


   <Table>
       <TableHeadr>
           {
               title.map((t,i)=>{
                   return(
                       <TableTh key={i} thead={t}/> 
                       )
                    })
                }

           </TableHeadr>
        <TableBody>
            {
                content
            }
       </TableBody> 

   </Table>


        <Modal>
            <MaintenanceForm/>
        </Modal>

            </>
  )
}

export default Maintenance