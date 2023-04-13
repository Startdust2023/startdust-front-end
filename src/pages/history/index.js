// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { CustomRoutesView } from 'src/@core/components/custom-routes-view'
import routes from 'src/@core/utils/routes'
import { Button, FormControl } from '@mui/material'
import Box from '@mui/material/Box'
import { MenuItem } from '@mui/material'
import { Chip } from '@mui/material'
import { useEffect, useState } from 'react'
import { InputLabel } from '@mui/material'
import { Select } from '@mui/material'
import {
  recetas,
  colors,
  alimentosOrigenAnimal,
  alimentosOrigenVegetal,
  alimentosGrasos
} from 'src/@core/utils/constants'
import CardMedia from '@mui/material/CardMedia'
import ViewRecipe from 'src/views/pages/generare-recipe/ViewRecipe'
import Avatar from '@mui/material/Avatar'
import CardStatisticsOrder from 'src/views/pages/history/CardStatisticsOrder'
import CardStatisticsALtura from 'src/views/pages/history/CarStatisticsAltura'
import CardStatisticsPuntuacion from 'src/views/pages/history/CardStatisticsPuntuacion'

const History = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CustomRoutesView routes={[routes.home, routes.history]} />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <Grid container spacing={4} justifyContent={'space-between'} sx={{ p: 4 }}>
            <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar alt='John Doe' sx={{ width: 70, height: 70 }} src='/images/avatars/1.png' />
            </Grid>
            <Grid item xs={6}>
              <Typography>Hernan Ruz</Typography>
              <Typography>
                <strong>Email:</strong> example@correo.mx
              </Typography>
              <Typography>
                <strong>Tel:</strong> XX XXX XX 45 12
              </Typography>
            </Grid>
          </Grid>
        </Card>
      </Grid>

      <Grid item xs={6} sm={4}>
        <CardStatisticsOrder />
      </Grid>
      <Grid item xs={6} sm={4}>
        <CardStatisticsALtura />
      </Grid>
      <Grid item xs={12}>
        <CardStatisticsPuntuacion />
      </Grid>
    </Grid>
  )
}

export default History
