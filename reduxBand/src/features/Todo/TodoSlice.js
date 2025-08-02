import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = [{id: nanoid(10), text: "Hello World"}]

export const todoslice = createSlice({
    name : "todo",
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const newTodo = {
                id : nanoid(10),
                text : action.payload
            }
            const newState = [...state, newTodo]

            return newState
        },
        removeTodo : (state,action) => {
           return state.filter(val=> val.id !== action.payload)
        },

        updateTodo : (state,action) => {

            const {id , text} = action.payload
            const newTodo = {
                id, 
                text
            }

            let targetObject = state.find(val => val.id === action.payload.id)

            if(targetObject)
                targetObject.text = text
        }
    }
})

export const { addTodo , removeTodo , updateTodo } = todoslice.actions

export default todoslice.reducer