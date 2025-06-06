import React, { useState } from 'react'
import { fields } from '../Data/Form';


function DynamicForm() {
    const [formDetails, setFormDetails] = useState({
        Name : "",
        Email : "",
        Password : ""
    })

    const handleForm = (e,field)=>{
        setFormDetails(prev => {
            return {
                ...prev,
                [field.label] : e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formDetails)
    }
  return (
    <form>
        {
            fields.map((value)=> 
                <div key={value.label}>
                     <label>{value.label}</label>
                     <input  name={value.label} type ={value.type} value={formDetails[value.label]} onChange={(e)=> handleForm(e,value)}/>
                </div>
            )
        }
        <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default DynamicForm