import React from "react"
import type Todo from "../Models/Todo"


const TodoProfile : React.FC<{TodoObj : Todo }> = ({TodoObj}) =>
{
    return(
        <li>{TodoObj.text}</li>
    )
}

export default TodoProfile