import {createApi,fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../app/firebase'


export const carApi=createApi({
    reducerPath:'carApi',
    baseQuery:fakeBaseQuery(),
    endpoints:(builder)=>({
        getCars:builder.query({
           async queryFn(){
                try {
                    const carRef=collection(db,'carsInfo')
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
                const {info}=data
                const{Matricule}=info
                try {
                     await addDoc(collection(db,'cars'),{
                      ...data
                    })
                    await addDoc(collection(db,'carsInfo'),{
                    
                       Matricule
                
                    })

                } catch (error) {
                    return {err:error}
                }
            }
        })
    })
})


export const {useGetCarsQuery,useAddcarMutation} = carApi