import React, { useState } from 'react'
import TimePicker from 'react-time-picker'
import 'react-time-picker/dist/TimePicker.css'

const TimePickerComponent = () => {
  const [selectedTime, setSelectedTime] = useState(null)

  const handleSelect = time => {
    setSelectedTime(time)
  }

  // Obtener la hora actual
  const now = new Date()
  const currentHour = now.getHours()

  // Configurar opciones de hora mínima y máxima permitida
  const minTime = currentHour >= 7 ? '07:00' : null
  const maxTime = currentHour <= 18 ? '18:00' : null

  return (
    <div>
      <h3>Selecciona una hora:</h3>
      <TimePicker
        value={selectedTime}
        onChange={handleSelect}
        minTime={minTime}
        maxTime={maxTime}
        disableClock={true}
        format='HH:mm'
      />
      <p>Seleccionaste: {selectedTime}</p>
    </div>
  )
}

export default TimePickerComponent
