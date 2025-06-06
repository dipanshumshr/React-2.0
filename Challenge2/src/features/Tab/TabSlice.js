import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeTab : null
}

export const tabSlice = createSlice({
    name : "tab",
    initialState,
    reducers : {
        changeVisibility : (state,action) => {
            state.activeTab = state.activeTab === action.payload ? null : action.payload
        }
    }
})

export const { changeVisibility } =  tabSlice.actions;

export default tabSlice.reducer;

