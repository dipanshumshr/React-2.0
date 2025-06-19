import React from 'react';

function Fruits({ onAdd, onRemove, onDuplicate, fruits, onUpdate }) {

  function handleChange(event) {
    const { name, value } = event.target;
    const updated = {
      ...fruits,
      [name]: value
    };
    onUpdate(updated);
  }

  return (
    <>
      <div style={{ marginBottom: "1rem", padding: "1rem", border: "1px solid #ccc", borderRadius: "8px" }}>
        <label>
          Fruit Name:
          <input
            type="text"
            name="name"
            value={fruits.name}
            placeholder="Enter fruit name"
            onChange={handleChange}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <br /><br />

        <label>
          Weight:
          <input
            type="number"
            name="weight"
            value={fruits.weight}
            placeholder="Enter weight"
            onChange={handleChange}
            style={{ marginLeft: "10px" }}
          />
        </label>
        <br /><br />

        <label>
          SKU:
          <input
            type="text"
            name="sku"
            value={fruits.sku}
            placeholder="Enter SKU"
            onChange={handleChange}
            style={{ marginLeft: "10px" }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "2rem" }}>
        <button onClick={onAdd}>Add</button>
        <button onClick={() => onRemove(fruits.id)} style={{ marginLeft: "10px" }}>Remove</button>
        <button onClick={() => onDuplicate(fruits.id)} style={{ marginLeft: "10px" }}>Duplicate</button>
      </div>
    </>
  );
}

export default Fruits;
