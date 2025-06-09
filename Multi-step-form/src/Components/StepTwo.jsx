import { useState } from "react"

function StepTwo({ onUpdate }) {

    const [formInput , setFormInput] = useState({
            Color : "",
            News : false
        })

    function handleChange(event)
        {
        const { name , value , checked } = event.target;

        let update = {}
        
        if(name === "News")
        {
            update = {...formInput,
                [name] : checked
            }     
        }
        else{
              update = {...formInput,
                [name] : value
            }    
        }
        setFormInput(update)

        onUpdate(update);
    }
            
  return (
    <div>
        <label>Favorite Color</label>
        <input type="text" name= "Color" value = {formInput.Color} onChange={handleChange}/>
        <label>Subscribe to news</label>
        <input type="checkbox" name = "News" checked = {formInput.News} onChange={handleChange}/>
    </div>
  )
}

export default StepTwo