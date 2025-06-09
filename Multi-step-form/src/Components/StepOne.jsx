import React, { useState } from 'react'

function StepOne({ onUpdate }) {

    const [formInput , setFormInput] = useState({
        Name : "",
        Email : ""
    })

    function handleChange(event)
    {
        let update = {}
        const { name , value } = event.target;
        update = {
            ...formInput,
            [name] : value
        }

        setFormInput(update);
        onUpdate(update);
    }

  return (
    <div>
        <label>Full name</label>
        <input type="text" name= "Name" value = {formInput.Name} onChange={handleChange}/>
        <label>Email</label>
        <input type="text" name= "Email" value = {formInput.Email} onChange={handleChange}/>
    </div>
  )
}

export default StepOne