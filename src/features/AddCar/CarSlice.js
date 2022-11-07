import {createSlice,current} from '@reduxjs/toolkit'


const initialState={
        car:{
            info:{},
            image:[]
        }
}

export const CarSlice=createSlice({
    name:'car',
    initialState,
    reducers:{
        addCarinfo:(state,action)=>{
            console.log(action.payload)
            state.car.info = action.payload
            console.log(current(state))
        },
        addCarImage:(state,action)=>{
            state.car.image.push(...action.payload)
            console.log(current(state))
        }
    },
})


export const carState=state=>state.car

export const {addCarinfo,addCarImage}=CarSlice.actions
export default CarSlice.reducer
