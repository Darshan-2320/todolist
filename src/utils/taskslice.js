import { createSlice } from "@reduxjs/toolkit";

const taskslice=createSlice({
    name:"tasks",
    initialState:{
        alltasks:[],
        todaytask:[],
        completetask:[],
        failedtask:[],
        upcomingtask:[],
    },
    reducers:{
        addtasks:(state,action)=>{
            state.alltasks=action.payload;
        },
        addtoday:(state,action)=>{
            state.todaytask=action.payload;
        },
        addcomplete:(state,action)=>{
            state.completetask=action.payload;
        },
        addfailed:(state,action)=>{
            state.failedtask=action.payload;
        },
        addupcoming:(state,action)=>{
            state.upcomingtask=action.payload;
        },
    },
    
})
export const {addtasks,addtoday,addcomplete,addfailed,addupcoming}=taskslice.actions;
export default taskslice.reducer;