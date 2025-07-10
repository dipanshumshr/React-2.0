import type React from "react"
import type Todo from "../Models/Todo"

const Todos : React.FC<{TodosList : Todo[]}> = ({TodosList}) =>{
    return(
        <ul>
        {TodosList.map(val=> {
            return <li key={val.id}>{val.text}</li>
        })}
        </ul>
    )
}

export default Todos