import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./buttonslice"
import userReducer from "./userslice"
import taskReducer from "./taskslice"
const appstore=configureStore({
    reducer:{
        button:buttonReducer,
        user:userReducer,
        tasks:taskReducer,
    },
});
export default appstore;