import { createSlice, current } from "@reduxjs/toolkit"; 

const initialState={
    client:{
        info:{},
        secondDriver:{},
        infoCar:{},
        contract:{},
        existing:false,
        allClients:[]
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
        ,
        
        isexisting:(state)=>{
            state.client.existing=true
        }
        ,allClients:(state,action)=>{
            state.client.allClients=action.payload
        }

    }
})


export const AllClient=state=>state.client.client
export const AllClientInof=state=>state.client.client.info
export const ExistingClientInof=state=>state.client.client.existing
export const AllClientsInfoCar=state=>state.client.client.allClients


export const{addClientinfo,addSecondDriver,addCarInfo,addContract,isexisting,allClients}=ClientSlice.actions
export default ClientSlice.reducer