function Form({ index, formData, handleUpdate}) {

    function handleChange(event)
    {
        const {name , value} = event.target;
        handleUpdate(index,{...formData,
            [name] : value,
        })
    }

  return  <div>
        <input type = "text" name="name" value = {formData.name} onChange={handleChange}/>
        <input type = "text" name= "email" value={formData.email} onChange={handleChange}/>
        <input type = "date" name= "birthDate" value= {formData.birthDate} onChange={handleChange}/>
    </div>
  
}

export default Form