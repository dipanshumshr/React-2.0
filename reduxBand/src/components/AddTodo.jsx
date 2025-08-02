import { useState } from "react"
import { useDispatch } from 'react-redux';
import { addTodo } from "../features/Todo/TodoSlice";


function AddTodo()
{
    const[input, setInput] = useState("")
    const dispatch = useDispatch()


    function handleAddTodo(e)
    {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }
 
    return <>
        <form>
            <label>Write in your todo</label>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleAddTodo}>Add Todo</button>
        </form>
    </>
}

export default AddTodo;