import React, { useState } from "react";
import type Todo from "../Models/Todo";

type TodoSubmitFn = {
    submitTodo : (todo : Todo) => void
}

const TodoInput : React.FC<TodoSubmitFn> = ({submitTodo}) => {

    const [Todo,setTodo] = useState({
        id : "",
        text : ""
    })

    function handleChange(e : React.ChangeEvent<HTMLInputElement>)
    {
        setTodo(prev => ({
            ...prev,
            id : new Date().toISOString(),
            text : e.target.value
        }))
    }

    function handleClick(e : React.MouseEvent<HTMLButtonElement>)
    {
        e.preventDefault();
        submitTodo(Todo)
    }

    return(
        <>
            <input name="Todo" type="text" value={Todo.text} onChange={handleChange}/>
            <button onClick={handleClick}>Submit</button>
        </>
    )
}

export default TodoInput;