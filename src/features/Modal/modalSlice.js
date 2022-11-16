import { createSlice } from "@reduxjs/toolkit";


const initialState={
    isOpen:false
}

export const ModalSlice=createSlice({
    name:'modal',
    initialState,
    reducers:{
        toggelModal:(state)=>{
            state.isOpen=!state.isOpen
        }
    }
}) 

export const isOpenState=state=>state.modal.isOpen

export const {toggelModal}=ModalSlice.actions
export default ModalSlice.reducer