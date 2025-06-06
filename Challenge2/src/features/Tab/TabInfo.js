import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entry : {
        home : null,
        profile : {
            username : null,
            showEmail : false,
        },
        setting : {
            showNotification : false,
            Mode : null
        }
    }
}

export const tabInfoSlice = createSlice({
    name : "info",
    initialState,
    reducers : {
        updateHome : (state,action) => {
            state.entry.home = action.payload
        },
        updateSetting : (state,action) => {
            const payLoad = action.payload
            if(payLoad.showNotification)
            {
                state.entry.setting.showNotification = payLoad.showNotification
            }
            if(payLoad.Mode)
            {
                state.entry.setting.Mode = payLoad.Mode
            }
        },
        updateProfile : (state,action) => {
            const payLoad = action.payload
            if(payLoad.username)
            {
                state.entry.profile.username = payLoad.username
            }
            if(payLoad.showEmail)
            {
                state.entry.profile.showEmail = payLoad.showEmail
            }
        }
    }

})

export const { updateHome , updateProfile , updateSetting } = tabInfoSlice.actions;

export default tabInfoSlice.reducer