import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    nameSurname:"",
    phone:"",
    email:"",
    travellerType:"",
    car:{},
    dateYear:"",
    dateMonth:"",
    dateDay:"",
    start:"",
    end:"",
    allRegister:[],
    edit:{}
}

const counterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        nameData: (state, action)=>{
            state.nameSurname=action.payload
        },
        phoneData:(state,action)=>{
            state.phone=action.payload
        },
        emailData:(state,action)=>{
            state.email=action.payload
        },
        travellerTypeData:(state,action)=>{
            state.travellerType=action.payload
        },
        carData:(state,action)=>{
            state.car=action.payload
        },
        dateYearData:(state,action)=>{
            state.dateYear= action.payload
        },
        dateMonthData:(state,action)=>{
            state.dateMonth= action.payload
        },
        dateDayData:(state,action)=>{
            state.dateDay= action.payload
        },
        startData:(state,action)=>{
            state.start=action.payload
        },
        endData:(state,action)=>{
            state.end=action.payload
        },
        allRegisterData:(state,action)=>{
            state.allRegister.push(action.payload)
        },
        allRegisterDataUpdate:(state,action)=>{
            state.allRegister=action.payload
        },
        editData:(state,action)=>{
            state.editData=action.payload
        }

    }

})

export const {nameData,phoneData,emailData,travellerTypeData,carData,dateDayData,dateYearData,dateMonthData,startData,endData,allRegisterData,allRegisterDataUpdate,editData}= counterSlice.actions;
export default counterSlice.reducer;