function Form({onAddHandler , onChangeHandle , onDeleteHandler , data})
{
    function handleChange(e)
    {
        const { name , value } = e.target;
        onChangeHandle(data.id,name, value)
    }

    return <div>
        <div>
            <label>Fruit Name</label>
            <input type="text" name = "fruitName" value={data.fruitName} onChange={handleChange}/>
            <label>Fruit weight</label>
            <input type="number" name = "weight" value={data.weight} onChange={handleChange} />
        </div>
        <div>
            <button onClick={onAddHandler}>Add</button>
            <button onClick={onDeleteHandler}>Delete</button>
        </div>
    </div>
}

export default Form;