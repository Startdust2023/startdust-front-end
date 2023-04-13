// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import React from 'react'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import { FormControl } from '@mui/material'
import { estados, municipios, colors } from 'src/@core/utils/constants'

import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'

import Divider from '@mui/material/Divider'
import Collapse from '@mui/material/Collapse'
import CardContent from '@mui/material/CardContent'
import { CardActions } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { Button } from '@mui/material'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const ImgClinic = styled('img')(({ theme }) => ({
  height: 50,
  width: 50,
  m: 2
}))

const ScheduleAppointment = () => {
  // Estado y municipio seleccionados
  const [estado, setEstado] = useState('')
  const [municipio, setMunicipio] = useState('')
  const [collapse, setCollapse] = useState(false)

  const handleClick = () => {
    setCollapse(!collapse)
  }

  // Manejar cambios en el selector de estado
  const handleEstadoChange = event => {
    setEstado(event.target.value)
    setMunicipio('') // Reiniciar el municipio seleccionado al cambiar de estado
  }

  // Manejar cambios en el selector de municipio
  const handleMunicipioChange = event => {
    setMunicipio(event.target.value)
  }

  const ItemClinicas = ({ item }) => {
    return (
      <Card>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Grid item xs={3}>
            <ImgClinic src={item.image} />
          </Grid>
          <Grid item xs={6} container>
            <Grid item xs={12}>
              <Typography>{item.name}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>{item.adress}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <CardActions className='card-action-dense'>
          <Box
            sx={{
              mt: 4,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Button onClick={handleClick}>Agendar Cita</Button>
            <IconButton size='small' onClick={handleClick}>
              <Icon fontSize='1.875rem' icon={collapse ? 'tabler:chevron-up' : 'tabler:chevron-down'} />
            </IconButton>
          </Box>
        </CardActions>
        <Collapse in={collapse}>
          <Divider sx={{ m: '0 !important' }} />
          <CardContent>
            <Box>
              <Typography variant='h7'>Seleccione la fecha y la hora de la cita</Typography>
              <Box sx={{ my: 5 }}>
                <DateTimePicker label='Fecha y Hora' sx={{ width: '100%' }} />
              </Box>
            </Box>
          </CardContent>
        </Collapse>
      </Card>
    )
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}></Grid>
      <Grid item xs={12}>
        <Card sx={{ p: 4, border: 2, borderColor: colors.green }}>
          <Typography align='justify' sx={{ mb: 4 }}>
            Encuentra las clinicas dentro de tu area
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='select-estado-label'>Estado</InputLabel>
                <Select
                  label='Estado'
                  labelId='select-estado-label'
                  fullWidth
                  id='selecte-estado'
                  MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                  value={estado}
                  onChange={handleEstadoChange}
                >
                  <MenuItem value=''>Selecciona un estado</MenuItem>
                  {estados.map(estado => (
                    <MenuItem key={estado.id} value={estado.id}>
                      {estado.nombre}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id='select-municipio-label'>Municipio</InputLabel>
                <Select
                  label='Municipio'
                  labelId='select-municipio-label'
                  fullWidth
                  id='select-municipio'
                  MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                  value={municipio}
                  onChange={handleMunicipioChange}
                >
                  <MenuItem value=''>Selecciona un municipio</MenuItem>
                  {estado &&
                    municipios[estado].map(municipio => (
                      <MenuItem key={municipio.id} value={municipio.id}>
                        {municipio.nombre}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ p: 6 }}>
          {municipio !== '' && estado !== '' ? (
            <Box>
              <DatePicker label='Basic date picker' />
            </Box>
          ) : null}

          {ItemClinicas({
            item: {
              name: 'receta',
              adress: 'description 1',
              image: '/images/pages/home/3.jpg'
            }
          })}
        </Card>
      </Grid>
    </Grid>
  )
}

export default ScheduleAppointment
