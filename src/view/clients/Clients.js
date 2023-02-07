import React, { useEffect } from 'react'
import {Table, TableBody, TableHeadr, TableTd, TableTh, TableTr} from '../../utils/table'
import { useDispatch } from 'react-redux'
import {allClients} from '../../features/AddClient/ClientSlice'
import {useGetClientsQuery} from '../../services/client'

function Clients() {
    const dispatch=useDispatch()
    const {isError,isLoading,isSuccess,data}=useGetClientsQuery()
    let content
    if(isLoading){
        content = <div>...loading</div>
    }else if(isSuccess){
        content = data.map(client=>{
            return <TableTr key={client.id}>
                    <TableTd tableTd={client.info.nom_prenme} tableLink={client.info.N_de_carte_nationale} />
                    <TableTd tableTd={client.info.N_de_carte_nationale} />
                    <TableTd tableTd={client.info.numero_de_permis} />
                    <TableTd tableTd={client.info.adresse} />
                 </TableTr>
        })
        
    }
    useEffect(()=>{
        dispatch(allClients(data))
    },[data])
    
  return (
    <Table>
        <TableHeadr>
            <TableTh thead={'Nom et Prénome'}/>
            <TableTh thead={'CIN'}/>
            <TableTh thead={'numero de permis'}/>
            <TableTh thead={'Adresse'}/>
        </TableHeadr>
        <TableBody>
            {
                 content
            }
        </TableBody>
    </Table>
  )
}

export default Clients