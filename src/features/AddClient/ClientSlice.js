import { createSlice, current } from "@reduxjs/toolkit"; 

const initialState={
    client:{
        info:{},
        secondDriver:{},
        infoCar:{},
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
        },
        
        addContract:(state,action)=>{
            state.client.contract=action.payload
        },
        
        addCarInfo:(state,action)=>{
            state.client.infoCar=action.payload
        }

    }
})


export const AllClient=state=>state.client.client


export const{addClientinfo,addSecondDriver,addCarInfo,addContract}=ClientSlice.actions
export default ClientSlice.reducer