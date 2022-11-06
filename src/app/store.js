import {configureStore} from '@reduxjs/toolkit'
import CarSlice from '../features/AddCar/CarSlice'


export const store=configureStore({
    reducer:{
        car:CarSlice,
    }
})