import {createApi,fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore'
import { db } from '../app/firebase'


export const carApi=createApi({
    reducerPath:'carApi',
    baseQuery:fakeBaseQuery(),
    endpoints:(builder)=>({
        getCars:builder.query({
           async queryFn(){
                try {
                    const carRef=collection(db,'cars')
                    const querySnapshot= await getDocs(carRef)
                    const cars =[]
                    querySnapshot?.forEach(car=>{
                        cars.push({
                            id:car.id,
                            ...car.data()
                        })
                    })
                    return {data:cars}
                } catch (err) {
                    return {error:err}
                }
            }
        }),
        addcar:builder.mutation({
            async queryFn(data){
                try {
                    await addDoc(collection(db,'cars'),{
                        ...data
                    })

                } catch (error) {
                    return {err:error}
                }
            }
        })
    })
})


export const {useGetCarsQuery,useAddcarMutation} = carApi