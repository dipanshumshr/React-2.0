import { useState } from "react";
import { useDispatch} from "react-redux";
import { removeTodo , updateTodo } from "../features/Todo/TodoSlice";

function ListTodo({todo})
{
    const [editable , setEditable] = useState(false)
    const [editText , setEditText] = useState("")
    const dispatch = useDispatch()

    function handleEditValue(text)
    {
        setEditText(text)
        setEditable(true)
    }

    function handleSaveValue()
    {
        const newTodo = {
            id : todo.id,
            text : editText
        }
        dispatch(updateTodo(newTodo))
        setEditable(false)
    }

    return <li>
        {editable ? <input type="text" value={editText} onChange={(e)=>setEditText(e.target.value)}/> : todo.text}
        <button onClick= { editable ? handleSaveValue : ()=> handleEditValue(todo.text) } > { editable ? "Save" : "Edit"} </button>
        <button onClick = {()=> dispatch(removeTodo(todo.id))}>Delete</button>
    </li>

}

export default ListTodo;