import { createApi,fakeBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { addDoc, arrayUnion, collection, doc, getDocs, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../app/firebase";




export const clientApi=createApi({
    reducerPath:'clientApi',
    baseQuery:fakeBaseQuery(),
    endpoints:(builder)=>({

        addClient:builder.mutation({
            async queryFn(data){
                const {info}=data
                const {Matricule ,N_de_carte_nationale}=info

                try {
                    await addDoc(collection(db,'clients'),{
                        ...data
                    })
                    await updateDoc(doc(db,'carsInfo',`${Matricule}`),{
                        [N_de_carte_nationale]:arrayUnion(info)
                    },{merge:true})    

                } catch (error) {
                    return {err:error}
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
        })
    })
})


export const {useAddClientMutation,useAddBadeClientMutation,useGetBadeClientsQuery}=clientApi