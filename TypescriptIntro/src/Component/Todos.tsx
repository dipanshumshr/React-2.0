import type React from "react"
import type Todo from "../Models/Todo"
import TodoProfile from "./TodoProfile"
 


const Todos : React.FC<{TodosList : Todo[]}> = ({TodosList}) =>{
    return(
        <ul>
        {TodosList.map(val=> {
            return <TodoProfile key={val.id} TodoObj={val}/>
        })}
        </ul>
    )
}

export default Todos