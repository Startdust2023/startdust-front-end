// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import SelectMunicipio from 'src/@core/components/SelectMunicipio'

const ScheduleAppointment = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card sx={{ minHeight: 50 }}>
          <Typography>Agendar tu cita</Typography>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ minHeight: 50 }}>Encuentra la clinica más cercana</Card>
        <Card sx={{ minHeight: 50 }}>
          <SelectMunicipio />
        </Card>
      </Grid>
    </Grid>
  )
}

export default ScheduleAppointment
