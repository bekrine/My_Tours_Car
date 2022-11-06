import {createSlice} from '@reduxjs/toolkit'


const initialState={
        car:[]
}

export const CarSlice=createSlice({
    name:'car',
    initialState,
    reducers:{
        addCar:(state,action)=>{

        }
    },
})


export const carState=state=>state.car

export const {addCar}=CarSlice.actions
export default CarSlice.reducer
