import React from "react";
import { formSchema } from "./FormSchema";
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({});

  function handleFormData(event, label ,type) {

    const value = type === "checkbox" ? event.target.checked : event.target.value;

    setFormData((prev) => {
      return { ...prev, 
        [label]: value };
    });
  }

  function handleClick() {
    console.log(formData);
  }

  return (
    <div>
      {formSchema.map((field) => (
        <div key={field.id}>
          <h3>{field.section}</h3>
          {field.inputs.map((value) => (
            <div key={value.label}>
              <label>{value.label}</label>
              <input
                type={value.type}
                value={ value.type === "checkbox" ? undefined : formData[value.label] || ""}
                checked = {value.type === "checkbox" ? formData[value.label] || false : undefined}
                onChange={(e) => handleFormData(e, value.label , value.type)}
              />
            </div>
          ))}
        </div>
      ))}

      <button onClick={handleClick}>Sign up</button>
    </div>
  );
}

export default Form;
