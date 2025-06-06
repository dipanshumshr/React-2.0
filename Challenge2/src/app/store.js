import { configureStore } from "@reduxjs/toolkit";

import tabReducer from "../features/Tab/TabSlice";

import tabInfoReducer from "../features/Tab/TabInfo"; 

export const store = configureStore({
    reducer: {
        tab: tabReducer,  
        info : tabInfoReducer,
    },
})