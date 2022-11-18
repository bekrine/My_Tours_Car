import { createSlice, current } from "@reduxjs/toolkit"; 

const initialState={
    client:{
        info:{},
        secondDriver:{},
     
    }

}

export const ClientSlice=createSlice({
    name:'client',
    initialState,
    reducers:{
        addClientinfo:(state,action)=>{
            state.client.info=action.payload
        },
        addSecondDriver:(state,action)=>{
            state.client.secondDriver=action.payload
        }

    }
})


export const AllClient=state=>state.client.client


export const{addClientinfo,addSecondDriver}=ClientSlice.actions
export default ClientSlice.reducer