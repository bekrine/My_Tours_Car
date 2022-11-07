import { createSlice, current } from "@reduxjs/toolkit"; 

const initialState={
    client:{
        info:{},
        secondDriver:{},
        contract:{}
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
        ,
        addContract:(state,action)=>{
            state.client.contract=action.payload

        }

    }
})


export const AllClient=state=>state.client


export const{addClientinfo,addContract,addSecondDriver}=ClientSlice.actions
export default ClientSlice.reducer