// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import { CustomRoutesView } from 'src/@core/components/custom-routes-view'
import routes from 'src/@core/utils/routes'
import Icon from 'src/@core/components/icon'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import SwiperControls from 'src/views/pages/home/SwiperControls'
import { useRouter } from 'next/router'
import ViewChefBot from 'src/views/pages/home/ViewChefBot'
import { useState } from 'react'

const colors = {
  orage: '#d98200',
  blue: '#1692b4',
  green: '#3b9528',
  blue2: '#2961b6'
}

const CardButtom = ({ icon, label, color, onClick }) => {
  return (
    <Button
      key={label}
      fullWidth
      variant='contained'
      sx={{
        alignItems: 'center',
        display: 'flex',
        backgroundColor: color,
        justifyContent: 'space-between',
        py: 4,
        px: 10,
        height: { xs: 50, sx: 70 }
      }}
      onClick={onClick}
    >
      <Icon icon={icon} fontSize={'1.8em'} />
      <Box sx={{ display: 'flex', mr: 2 }}>{label}</Box>
    </Button>
  )
}
const Home = () => {
  const [openView, setOpenView] = useState(false)
  const handleView = () => {
    setOpenView(false)
  }
  const router = useRouter()

  return (
    <Grid container spacing={6} justifyContent={'space-between'}>
      <Grid item xs={12} container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{ minHeight: { xs: 200, sm: 220 }, width: { xs: '100%', sm: 400 } }}>
          <SwiperControls />
        </Card>
      </Grid>
      <Grid item xs={12} sm={0} sx={{ height: { xs: 100, sm: 0 } }}></Grid>
      <Grid item container spacing={4} xs={12}>
        <Grid item xs={12} sm={4} md={3}>
          <CardButtom
            icon={'lucide:clipboard-signature'}
            label={'Mi Historial'}
            color={colors.green}
            onClick={() => {
              router.push(routes.history.path)
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <CardButtom
            icon={'lucide:book-open-check'}
            label={'Agendar Consulta'}
            color={colors.blue}
            onClick={() => {
              router.push(routes.ScheduleAppointment.path)
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <CardButtom
            icon={'lucide:chef-hat'}
            label={'ChefBot'}
            color={colors.blue2}
            onClick={() => {
              setOpenView(true)
            }}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <CardButtom icon={'lucide:globe'} label={'Foro'} color={colors.green} onClick={() => {}} />
        </Grid>
        <Grid item xs={12} sm={4} md={3}>
          <CardButtom
            icon={'lucide:bike'}
            label={'Hagamos Ejercicio'}
            color={colors.blue}
            onClick={() => {
              router.push(routes.workout.path)
            }}
          />
        </Grid>
      </Grid>
      <ViewChefBot open={openView} toggle={handleView} />
    </Grid>
  )
}

export default Home
