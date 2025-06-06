import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../CounterSlice/CountSlice"

export const store = configureStore({
    reducer : {
        counter : counterReducer
    }
})