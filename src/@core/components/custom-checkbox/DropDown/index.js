import React, { useState } from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

const Dropdown = () => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleSelect = event => {
    setSelectedValue(event.target.value)
  }

  return (
    <div>
      <h3>Selecciona una opción:</h3>
      <Select value={selectedValue} onChange={handleSelect}>
        <MenuItem value=''>--Seleccionar--</MenuItem>
        <MenuItem value='1'>
          Salud Digna Laboratorio de análisis clínicos Av. Prol. Muñoz 376, Los Reyes, 78170 San Luis, S.L.P.
        </MenuItem>
        <MenuItem value='2'>
          Salud Digna Laboratorio de análisis clínicos Manuel José Othón 423, Centro Historico, 78000 San Luis, S.L.P.
        </MenuItem>
        <MenuItem value='3'>
          Salud Digna Laboratorio de análisis clínicos Av. José de Gálvez 620, Ricardo B. Anaya 1ra Secc, 78390 San
          Luis, S.L.P.
        </MenuItem>
      </Select>
    </div>
  )
}

export default Dropdown
