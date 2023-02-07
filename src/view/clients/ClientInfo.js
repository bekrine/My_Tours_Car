import React from 'react'
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {AllClientsInfoCar} from '../../features/AddClient/ClientSlice'
import { Table, TableBody, TableHeadr, TableTd, TableTh, TableTr } from '../../utils/table'
import {nbrJoure} from '../../utils/dateCalcule'


function ClientInfo() {
    const clients=useSelector(AllClientsInfoCar)
    const {CIN}=useParams()
    let client=clients.filter(client=>client.id === CIN)
  
    let content
    content=client[0].clientInfo.map((info,index)=>{
      return <TableTr key={index}>
          <TableTd tableTd={info.Marque} />
          <TableTd tableTd={info.Mt} />
          <TableTd tableTd={info.date_de_dpart} />
          <TableTd tableTd={info.date_de_revnier} />
          <TableTd tableTd={info.nombre_de_killomitrage_de_depart} />
          <TableTd tableTd={info.prix_de_louee} />
      </TableTr>
    })
  return (
   <>
   <div className='ml-6 mt-4'> 
     <h1 className='m-2' >CIN : {client[0].info.N_de_carte_nationale}</h1>
     <h1 className='m-2'>NOM Prénome : {client[0].info.nom_prenme}</h1>
     <h1 className='m-2'>Numero De Permis : {client[0].info.numero_de_permis}</h1>
   </div>

   <Table>
     <TableHeadr>
       <TableTh thead={'Matricule'}/>
       <TableTh thead={'Marque'}/>
       <TableTh thead={'date_de_dpart'}/>
       <TableTh thead={'date_de_revnier'}/>
       <TableTh thead={'nbr_km_de_depart'}/>
       <TableTh thead={'prix_de_louee'}/>
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

export default ClientInfo