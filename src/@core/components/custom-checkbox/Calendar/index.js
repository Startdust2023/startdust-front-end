import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

const CalendarPicker = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  const handleSelect = date => {
    setSelectedDate(date)
  }

  // Obtener la fecha actual
  const today = new Date()

  // Configurar opciones de fecha mínima y máxima permitida
  const minDate = new Date()
  const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30)

  return (
    <div>
      <h3>Selecciona una fecha:</h3>
      <DatePicker
        selected={selectedDate}
        onChange={handleSelect}
        minDate={minDate}
        maxDate={maxDate}
        placeholderText='Selecciona una fecha'
        dateFormat='dd/MM/yyyy'
      />
    </div>
  )
}

export default CalendarPicker
