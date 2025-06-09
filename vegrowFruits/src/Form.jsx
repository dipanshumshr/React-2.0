import React from 'react'

function Form({ FormValue , onUpdate}) {

    function handleUpdate(event)
    {
        const {value, name} = event.target
        const updated = {...FormValue,
            [name] : value
        }
        onUpdate(updated)
    }

  return (
    <div>
        <label>Product name</label>
        <input type="text" name="Product-name" value={FormValue["Product-name"]} onChange={handleUpdate}/>
        <label>SKU</label>
        <input type="text" name="Product-sku" value= {FormValue["Product-sku"]} onChange={handleUpdate}/>
        <label>Product type</label>
        <select value={FormValue["Product-type"]} name="Product-type" onChange={handleUpdate}>
            <option value="kg">KG</option>
            <option value="unit">Units</option>
        </select>
        <label>Expected weight</label>
        <input type="number" name="Expected" value= {FormValue["Expected"]} onChange={handleUpdate}/>
        <label>Actual weight</label>
        <input type="number" name="Actual" value= {FormValue["Actual"]} onChange={handleUpdate}/>
    </div>
  )
}

export default Form