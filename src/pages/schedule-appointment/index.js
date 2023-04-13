// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Dropdown from 'src/@core/components/custom-checkbox/DropDown'
import Calendar from 'src/@core/components/custom-checkbox/Calendar'
import SelectMunicipio from 'src/@core/components/SelectMunicipio/selectMunicipio2'
import Clock from 'src/@core/components/custom-checkbox/Clock'
import { useState } from 'react'

const ScheduleAppointment = () => {
  // Estado y municipio seleccionados
  const [estado, setEstado] = useState('')
  const [municipio, setMunicipio] = useState('')

  // Manejar cambios en el selector de estado
  const handleEstadoChange = event => {
    setEstado(event.target.value)
    setMunicipio('') // Reiniciar el municipio seleccionado al cambiar de estado
  }

  // Manejar cambios en el selector de municipio
  const handleMunicipioChange = event => {
    setMunicipio(event.target.value)
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card sx={{ minHeight: 50 }}>
          <Typography>Agendar tu cita</Typography>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ minHeight: 50 }}>Encuentra las clinicas dentro de tu area</Card>
        <Card sx={{ minHeight: 50 }}>
          <SelectMunicipio
            estado={estado}
            municipio={municipio}
            handleEstadoChange={handleEstadoChange}
            handleMunicipioChange={handleMunicipioChange}
          />
        </Card>
        {municipio !== '' ? (
          <Card>
            {' '}
            <Dropdown></Dropdown>
            <Calendar></Calendar>
            <Clock></Clock>
          </Card>
        ) : null}
      </Grid>
    </Grid>
  )
}

export default ScheduleAppointment
