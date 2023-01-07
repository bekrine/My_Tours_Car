import { useRef } from "react"
import { toggelModal } from "../../features/Modal/modalSlice"
import { useDispatch } from 'react-redux'
import { Table, TableBody, TableHeadr, TableTd, TableTh, TableTr } from "../../utils/table"
import {useGetBadeClientsQuery} from '../../services/client'
 
import Modal from "../../utils/Modal"
import AddBAdeClient from "./AddBAdeClient"


function BadeClient() {
    const recherchRef=useRef()
    const dispatch = useDispatch()
    const {data,isLoading,isError,error}=useGetBadeClientsQuery()
    const title=["Nom Et Prenom ","N° de la cart national",'N° de Pirme']


    // console.log(recherchRef.current.value)
   
    let content 
    if(isLoading){
        content=<option>loadin...</option>
    }else if(data){
    content=data?.map((client,index)=>{
            return(
                <TableTr key={index}>
                    <TableTd tableTd={client.nom_prenme}/>
                    <TableTd tableTd={client.N_de_carte_nationale}/>
                    <TableTd tableTd={client.numero_de_permis}/>
                </TableTr>
            )
        })
    }else if(isError){
        content=<div>{error}</div>
    }

    return (
        <>
            <div className='block mx-3 mb-6  md:flex mx-3 mb-6'>
            <div className='w-full md:px-3 mb-6 md:mb-0'>
                    <label htmlFor="recherch" 
                     className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
                    >Recherch</label>
                    <input 
                    ref={recherchRef}
                   
                    className='appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
                    type='text' />
                </div>

                <div className='w-full flex justify-center my-6 md:w-1/2 px-3 mb-6 md:mb-0'>

                    <button
                        onClick={() => dispatch(toggelModal())}
                        className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5  mr-2  dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800'
                        type='button'>Ajouter Client</button>
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
                <AddBAdeClient/>
            </Modal>
        </>
    )


}

export default BadeClient