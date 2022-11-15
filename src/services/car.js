import {createApi,fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../app/firebase'


export const carApi=createApi({
    reducerPath:'carApi',
    baseQuery:fakeBaseQuery(),
    endpoints:(builder)=>({
        getCars:builder.query({
            queryFn(){

            }
        }),
        addcar:builder.mutation({
            async queryFn(data){
                try {
                    await addDoc(collection(db,'cars'),{
                        timestemp:serverTimestamp(),
                        ...data
                    })


                } catch (error) {
                    return error.message
                }
            }
        })
    })
})


export const {useGetCarsQuery,useAddcarMutation} = carApi