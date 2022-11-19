import {createApi,fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import { addDoc, arrayUnion, collection, doc, getDocs, updateDoc } from 'firebase/firestore'
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
        getCarsMaintenance:builder.query({
           async queryFn(){
                try {
                    const carRef=collection(db,'carsMaintenance')
                    const querySnapshot= await getDocs(carRef)
                    const carsMaintenance =[]
                    querySnapshot?.forEach(car=>{
                        carsMaintenance.push({
                            id:car.id,
                            ...car.data()
                        })
                    })
                    return {data:carsMaintenance}
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
                    await addDoc(collection(db,'carsMaintenance'),{
                    
                       Matricule
                
                    })

                } catch (error) {
                    return {err:error}
                }
            }
        }),
        addCarMantenance:builder.mutation({
            async queryFn(data){
                const {Matricule}=data
                try {
                    await updateDoc(doc(db,'carsMaintenance',`${Matricule}`),{
                        maintenance:arrayUnion(data)
                    })
                    
                } catch (error) {
                    return error
                }
            }
        })
    })
})


export const {useGetCarsQuery,
                useAddcarMutation,
                useGetCarsMaintenanceQuery,
                useAddCarMantenanceMutation} = carApi