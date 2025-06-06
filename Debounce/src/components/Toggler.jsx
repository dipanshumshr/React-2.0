import React, { useState } from 'react'
import Switch from '@mui/material/Switch';

function Toggler({ onCheck }) {

  return (
    <div>
        <label>Controlled Toggler</label>
         <Switch color="secondary" onChange={onCheck}/>
    </div>
  )
}

export default Toggler