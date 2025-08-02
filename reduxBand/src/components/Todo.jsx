import React from "react";
import { useSelector} from "react-redux";
import ListTodo from "./ListTodo";

function Todo()
{
    
    const todos = useSelector(state => state.todo)

    return <div>
        <ul>
            {todos.map(val => 
                <ListTodo key = {val.id} todo = {val}/>
            )}
        </ul>
    </div>
}

export default Todo