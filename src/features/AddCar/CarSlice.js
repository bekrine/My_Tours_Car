import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


const initialState={
        car:{
            info:{},
            image:[]
        },
        status:'idle',
}



export const CarSlice=createSlice({
    name:'car',
    initialState,
    reducers:{
        addCarinfo:(state,action)=>{
            console.log(action.payload)
            state.car.info = action.payload
        },
        addCarImage:(state,action)=>{
            state.car.image.push({url:action.payload})
        }
    },
})


export const carImageState=state=>state.car.car.image

export const {addCarinfo,addCarImage}=CarSlice.actions
export default CarSlice.reducer
