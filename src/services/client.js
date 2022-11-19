import { createApi,fakeBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { addDoc, arrayUnion, collection, doc, setDoc, updateDoc } from "firebase/firestore";
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
        })
    })
})


export const {useAddClientMutation}=clientApi