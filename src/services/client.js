import { createApi,fakeBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { addDoc, arrayUnion, collection, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../app/firebase";




export const clientApi=createApi({
    reducerPath:'clientApi',
    baseQuery:fakeBaseQuery(),
    endpoints:(builder)=>({

        addClient:builder.mutation({
            async queryFn(data){
             
                const {info,contract,infoCar}=data
                const {Matricule ,N_de_carte_nationale}=info
               
                const {date_de_dpart,date_de_revnier,nombre_de_killomitrage_de_depart,prix_de_louee}=contract
                const {Matricule:Mt,Marque}=infoCar
                try {
                    await setDoc(doc(db,'clients',`${info.N_de_carte_nationale}`),{
                        info,
                        clientInfo:[{
                            date_de_dpart,date_de_revnier
                                                    ,nombre_de_killomitrage_de_depart,
                                                    prix_de_louee
                                                    ,Mt,
                                                    Marque}
                        ]
                    })
                   

                   
                } catch (error) {
                    return {err:error}
                }
            }
        }),updateClient:builder.mutation({
            async queryFn(data){

                const {info,contract,infoCar}=data
                const {Matricule ,N_de_carte_nationale}=info

                const {date_de_dpart,date_de_revnier,nombre_de_killomitrage_de_depart,prix_de_louee}=contract
                const {Matricule:Mt,Marque}=infoCar

                try {
                    await updateDoc(doc(db,'clients',`${info.N_de_carte_nationale}`),{
    
                        ['clientInfo']:arrayUnion({date_de_dpart,date_de_revnier
                                                    ,nombre_de_killomitrage_de_depart,
                                                    prix_de_louee
                                                    ,Mt,
                                                    Marque})
                                                    
                    },{merge:true})
                    await updateDoc(doc(db,'carsInfo',`${Matricule}`),{
                        [N_de_carte_nationale]:arrayUnion(info)
                    },{merge:true})    

                } catch (error) {
                    console.log(error)
                }

            }
        }),addBadeClient:builder.mutation({
            async queryFn(data){
                try {
                    await addDoc(collection(db,'badeClients'),{
                        ...data
                    })

                } catch (error) {
                    return {err:error}
                }
            }
        }),getBadeClients:builder.query({
            async queryFn(){
                try {
                    const clientRef=collection(db,'badeClients')
                    const querySnapshot=await getDocs(clientRef)
                    const badeClients=[]
                    querySnapshot?.forEach(client=>{
                        badeClients.push({
                            id:client.id,
                            ...client.data()
                        })
                    })
                    return {data:badeClients}

                } catch (error) {
                    return {err:error}
                }
            }
        }),searchBadeClient:builder.query({
            async queryFn(NcartNational){
                try {
                    
                      const badeClientRef=collection(db,'badeClients')
                      const clientRef=collection(db,'clients')
                      const badeClientQuery=query(badeClientRef,where('N_de_carte_nationale','==',`${NcartNational}`))
                      const clientquery=query(clientRef,where('info.N_de_carte_nationale','==',`${NcartNational}`))
                      const badeClientQuerySnapshot= await getDocs(badeClientQuery)
                      const ClientQuerySnapshot= await getDocs(clientquery)
                    const badeClients=[]
                    const clients=[]
                    badeClientQuerySnapshot.forEach((client) => {
                        badeClients.push({
                            id:client.id,
                            ...client.data()
                        })
                    });
                    ClientQuerySnapshot.forEach((client) => {
                        clients.push({
                            id:client.id,
                            ...client.data()
                        })
                    });
                    
                            let resulte={badeClients,clients}
                         
                      return {data:resulte}
                  } catch (error) {
                      console.log(error)
                  }
            }
         }),getClients:builder.query({
             async queryFn(){
                 try {
                     const clientsRef=collection(db,'clients')
                     const querySnapshot= await getDocs(clientsRef)
                     const clients =[]
                     querySnapshot.forEach((client)=>{
                         clients.push({
                             id:client.id,
                             ...client.data()
                         })
                     })
                     return {data:clients}
                 } catch (error) {
                     return {error}
                 }
             }
         }),getClientInfo:builder.query({
             async queryFn(N_de_carte_nationale){
                 try {
                     const clientsRef=collection(db,'clients')
                     const querySnapshot= await getDocs(clientsRef)
                     const clients =[]
                     querySnapshot.forEach((client)=>{
                         clients.push({
                             id:client.id,
                             ...client.data()
                         })
                     })
                     return {data:clients}
                 } catch (error) {
                     return {error}
                 }
             }
         })

    })
})


export const {useAddClientMutation,
                useAddBadeClientMutation,
                useGetBadeClientsQuery,
                useLazySearchBadeClientQuery,
                useGetClientsQuery,
                useUpdateClientMutation
                }=clientApi