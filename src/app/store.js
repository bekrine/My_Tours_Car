import {configureStore} from '@reduxjs/toolkit'
import CarSlice from '../features/AddCar/CarSlice'
import ClientSlice from '../features/AddClient/ClientSlice'


export const store=configureStore({
    reducer:{
        car:CarSlice,
        client:ClientSlice
    }
})