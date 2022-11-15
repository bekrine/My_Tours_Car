import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const gitCar=createApi({
    reducerPath:'gitCar',
    baseQuery:fetchBaseQuery({baseUrl:''}),
    endpoints:(builder)=>{}
})