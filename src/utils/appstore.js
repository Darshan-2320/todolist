import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "./buttonslice"
const appstore=configureStore({
    reducer:{
        button:buttonReducer,
    }
});
export default appstore;