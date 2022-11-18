import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {carApi} from '../services/car'
import {clientApi} from '../services/client'
import CarSlice from '../features/AddCar/CarSlice'
import ClientSlice from '../features/AddClient/ClientSlice'
import modalReducer from '../features/Modal/modalSlice'


export const store=configureStore({
    reducer:{
        [carApi.reducerPath]:carApi.reducer,
        [clientApi.reducerPath]:clientApi.reducer,
         car:CarSlice,
         client:ClientSlice,
        modal:modalReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(carApi.middleware).concat(clientApi.middleware),
    
})

setupListeners(store.dispatch)