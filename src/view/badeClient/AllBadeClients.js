import React from 'react'
import {useGetBadeClientsQuery} from '../../services/client'

import { Table, TableBody, TableHeadr, TableTd, TableTh, TableTr } from '../../utils/table'

function AllBadeClients() {

    const {data,isLoading,isSuccess}=useGetBadeClientsQuery()

    let content
    if(isLoading){
        content=<div>...loading</div>
    }else if(isSuccess){
        
        content=data.map(badeClient=>{
            return <TableTr key={badeClient.id}>
                <TableTd tableTd={badeClient.N_de_carte_nationale}/>
                <TableTd tableTd={badeClient.nom_prenme}/>
                <TableTd tableTd={badeClient.numero_de_permis}/>
            </TableTr>
        })
    }


  return (
      <>
      <div className='flex justify-center justify-item-center my-6'>
          <h1>Tous Les mauvais Clients</h1>
      </div>
   <Table>
       <TableHeadr>
           <TableTh thead={"N_de_carte_nationale"}/>
           <TableTh thead={"Nom Prenom"}/>
           <TableTh thead={"numero_de_permis"}/>
       </TableHeadr>
       <TableBody>
           {
               content
            }
       </TableBody>
   </Table>
            </>
  )
}

export default AllBadeClients