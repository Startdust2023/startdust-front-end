// ** React Imports
import { useState } from 'react'
import * as React from 'react'

//**MUI I */
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Collapse from '@mui/material/Collapse'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const HagamosEjercicio = () => {
  // ** State
  const [collapse, setCollapse] = useState(false)
  const [collapse1, setCollapse1] = useState(false)
  const [collapse2, setCollapse2] = useState(false)
  const [collapse3, setCollapse3] = useState(false)

  const handleClick = () => {
    setCollapse(!collapse)
  }

  const handleClick1 = () => {
    setCollapse1(!collapse1)
  }

  const handleClick2 = () => {
    setCollapse2(!collapse2)
  }

  const handleClick3 = () => {
    setCollapse3(!collapse3)
  }

  const [openCaminar, setOpenCaminar] = React.useState(false)
  const [openCaminar1, setOpenCaminar1] = React.useState(false)
  const [openCaminar2, setOpenCaminar2] = React.useState(false)
  const [openCaminar3, setOpenCaminar3] = React.useState(false)
  const [openEscaleras, setOpenEscaleras] = React.useState(false)
  const [openEscaleras1, setOpenEscaleras1] = React.useState(false)
  const [openEscaleras2, setOpenEscaleras2] = React.useState(false)
  const [openEscaleras3, setOpenEscaleras3] = React.useState(false)
  const [openCuerda, setOpenCuerda] = React.useState(false)
  const [openCuerda1, setOpenCuerda1] = React.useState(false)
  const [openCuerda2, setOpenCuerda2] = React.useState(false)
  const [openCuerda3, setOpenCuerda3] = React.useState(false)
  const [openBici, setOpenBici] = React.useState(false)
  const [openBici1, setOpenBici1] = React.useState(false)
  const [openBici2, setOpenBici2] = React.useState(false)
  const [openBici3, setOpenBici3] = React.useState(false)
  const [openMas, setOpenMas] = React.useState(false)
  const [openMas1, setOpenMas1] = React.useState(false)
  const [openMas2, setOpenMas2] = React.useState(false)
  const [openMas3, setOpenMas3] = React.useState(false)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpenCaminar = () => {
    setOpenCaminar(true)
  }

  const handleCloseCaminar = () => {
    setOpenCaminar(false)
  }

  const handleClickOpenCaminar1 = () => {
    setOpenCaminar1(true)
  }

  const handleCloseCaminar1 = () => {
    setOpenCaminar1(false)
  }

  const handleClickOpenCaminar2 = () => {
    setOpenCaminar2(true)
  }

  const handleCloseCaminar2 = () => {
    setOpenCaminar2(false)
  }

  const handleClickOpenCaminar3 = () => {
    setOpenCaminar3(true)
  }

  const handleCloseCaminar3 = () => {
    setOpenCaminar3(false)
  }

  const handleClickOpenEscaleras = () => {
    setOpenEscaleras(true)
  }

  const handleCloseEscaleras = () => {
    setOpenEscaleras(false)
  }

  const handleClickOpenEscaleras1 = () => {
    setOpenEscaleras1(true)
  }

  const handleCloseEscaleras1 = () => {
    setOpenEscaleras1(false)
  }

  const handleClickOpenEscaleras2 = () => {
    setOpenEscaleras2(true)
  }

  const handleCloseEscaleras2 = () => {
    setOpenEscaleras2(false)
  }

  const handleClickOpenEscaleras3 = () => {
    setOpenEscaleras3(true)
  }

  const handleCloseEscaleras3 = () => {
    setOpenEscaleras3(false)
  }

  const handleClickOpenCuerda = () => {
    setOpenCuerda(true)
  }

  const handleCloseCuerda = () => {
    setOpenCuerda(false)
  }

  const handleClickOpenCuerda1 = () => {
    setOpenCuerda1(true)
  }

  const handleCloseCuerda1 = () => {
    setOpenCuerda1(false)
  }

  const handleClickOpenCuerda2 = () => {
    setOpenCuerda2(true)
  }

  const handleCloseCuerda2 = () => {
    setOpenCuerda2(false)
  }

  const handleClickOpenCuerda3 = () => {
    setOpenCuerda3(true)
  }

  const handleCloseCuerda3 = () => {
    setOpenCuerda3(false)
  }

  const handleClickOpenBici = () => {
    setOpenBici(true)
  }

  const handleCloseBici = () => {
    setOpenBici(false)
  }

  const handleClickOpenBici1 = () => {
    setOpenBici1(true)
  }

  const handleCloseBici1 = () => {
    setOpenBici1(false)
  }

  const handleClickOpenBici2 = () => {
    setOpenBici2(true)
  }

  const handleCloseBici2 = () => {
    setOpenBici2(false)
  }

  const handleClickOpenBici3 = () => {
    setOpenBici3(true)
  }

  const handleCloseBici3 = () => {
    setOpenBici3(false)
  }

  const handleClickOpenMas = () => {
    setOpenMas(true)
  }

  const handleCloseMas = () => {
    setOpenMas(false)
  }

  const handleClickOpenMas1 = () => {
    setOpenMas1(true)
  }

  const handleCloseMas1 = () => {
    setOpenMas1(false)
  }

  const handleClickOpenMas2 = () => {
    setOpenMas2(true)
  }

  const handleCloseMas2 = () => {
    setOpenMas2(false)
  }

  const handleClickOpenMas3 = () => {
    setOpenMas3(true)
  }

  const handleCloseMas3 = () => {
    setOpenMas3(false)
  }

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={12}>
        <Typography variant='h5' align='center' sx={{ mb: 12 }} gutterBottom>
          A continuación, elige una opción dependiendo del tipo de actividad física que realices para que podamos
          recomendarte ejercicios que puedes hacer desde tu casa
        </Typography>
      </Grid>
      <Grid item xs={12} md={12}>
        <Card>
          <CardMedia sx={{ height: '14.5625rem' }} image='/images/cards/sedentaria.jpg' />
          <CardContent>
            <Typography variant='h6' sx={{ mb: 2 }}>
              Actividad Física Sedentaria
            </Typography>
            <Typography variant='body2'>No realiza ejercicio</Typography>
          </CardContent>
          <CardActions className='card-action-dense'>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button onClick={handleClick}>Detalles</Button>
              <IconButton size='small' onClick={handleClick}>
                <Icon fontSize='1.875rem' icon={collapse ? 'tabler:chevron-up' : 'tabler:chevron-down'} />
              </IconButton>
            </Box>
          </CardActions>
          <Collapse in={collapse}>
            <Divider sx={{ m: '0 !important' }} />
            <Box display='flex' justifyContent='space-around'>
              <Grid item xs={3} md={1.4}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/correr.png' />
                  <Button variant='outlined' onClick={handleClickOpenCaminar}>
                    Una Caminata
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openCaminar}
                    onClose={handleCloseCaminar}
                    aria-labelledby='responsive-dialog-title-caminar'
                  >
                    <DialogTitle id='responsive-dialog-title-caminar'>{'Beneficios de caminar'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Caminar todos los días al menos 30 minutos, reduce el riesgo de sufrir enfermedades
                        cardiovasculares. Para que esta actividad funcione de forma efectiva, debes realizar la caminata
                        de manera continua, es decir, 30 minutos completos y sin interrupciones. Puedes comenzar con un
                        paso normal y con el tiempo, incrementar la velocidad.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseCaminar} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.47}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/escaleras.png' />
                  <Button variant='outlined' onClick={handleClickOpenEscaleras}>
                    Subir escaleras
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openEscaleras}
                    onClose={handleCloseEscaleras}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Beneficios de subir escaleras'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Subir las escaleras de tu casa u oficina en lugar de utilizar el elevador, es una excelente
                        opción para comenzar a ejercitarte. Comienza subiendo 2 o 3 pisos y con el paso del tiempo
                        incrementa el número de escalones a subir.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseEscaleras} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.4}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/saltar.png' />
                  <Button variant='outlined' onClick={handleClickOpenCuerda}>
                    Saltar Cuerda
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openCuerda}
                    onClose={handleCloseCuerda}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Beneficios de saltar la cuerda'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Si cuentas con una mejor condición física, saltar la cuerda durante 15 minutos, brindará grandes
                        beneficios a tu salud. Además de quemar calorías de forma rápida, ya que es un ejercicio
                        cardiovascular, mejora tus reflejos y procesos de respiración. Comienza saltando de forma suave
                        y a un ritmo moderado. Con el tiempo y de acuerdo con cómo te sientas, incrementa la velocidad y
                        la altura de tus saltos.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseCuerda} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.4}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/bici.png' />
                  <Button variant='outlined' onClick={handleClickOpenBici}>
                    Andar en bicicleta
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openBici}
                    onClose={handleCloseBici}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Beneficios de andar en bicicleta'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        El ciclismo es un excelente ejercicio para comenzar a adoptar un estilo de vida más saludable,
                        ya que no requiere gran esfuerzo físico y es sumamente divertido y práctico. Si te es posible,
                        sustituye dos días a la semana tu manera de transportarte utilizando la bicicleta. Cada dos
                        semanas, incrementa 1 día de uso de bici; verás que además de perder peso y ganar flexibilidad,
                        ahorrarás bastante dinero.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseBici} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.45}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/mas.png' />
                  <Button variant='outlined' onClick={handleClickOpenMas}>
                    Más Ejercicios
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openMas}
                    onClose={handleCloseMas}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Otros ejercicios'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Si ya has realizado ejercicio, esta rutina es ideal para ti: <br></br>• 15 sentadillas (3 series
                        con espacio de 1 minuto) <br></br>• 15 flexiones/desplantes (3 series con espacio de 1 minuto){' '}
                        <br></br>• 15 abdominales (3 series con espacio de 1 minuto) <br></br>• 15 saltos suelo/cielo (3
                        series con espacio de 1 minuto)
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseMas} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
            </Box>
          </Collapse>
        </Card>
      </Grid>
      <Grid item xs={12} md={12}>
        <Card>
          <CardMedia sx={{ height: '14.5625rem' }} image='/images/cards/moderada.jpg' />
          <CardContent>
            <Typography variant='h6' sx={{ mb: 2 }}>
              Actividad Física Mediana
            </Typography>
            <Typography variant='body2'>Tres horas semanales de actividad física</Typography>
          </CardContent>
          <CardActions className='card-action-dense'>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button onClick={handleClick1}>Detalles</Button>
              <IconButton size='small' onClick={handleClick1}>
                <Icon fontSize='1.875rem' icon={collapse1 ? 'tabler:chevron-up' : 'tabler:chevron-down'} />
              </IconButton>
            </Box>
          </CardActions>
          <Collapse in={collapse1}>
            <Divider sx={{ m: '0 !important' }} />
            <Box display='flex' justifyContent='space-around'>
              <Grid item xs={3} md={1.4}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/correr.png' />
                  <Button variant='outlined' onClick={handleClickOpenCaminar1}>
                    Una Caminata
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openCaminar1}
                    onClose={handleCloseCaminar1}
                    aria-labelledby='responsive-dialog-title-caminar'
                  >
                    <DialogTitle id='responsive-dialog-title-caminar'>{'Beneficios de caminar'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Caminar todos los días al menos 30 minutos, reduce el riesgo de sufrir enfermedades
                        cardiovasculares. Para que esta actividad funcione de forma efectiva, debes realizar la caminata
                        de manera continua, es decir, 30 minutos completos y sin interrupciones. Puedes comenzar con un
                        paso normal y con el tiempo, incrementar la velocidad.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseCaminar1} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.47}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/escaleras.png' />
                  <Button variant='outlined' onClick={handleClickOpenEscaleras1}>
                    Subir escaleras
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openEscaleras1}
                    onClose={handleCloseEscaleras1}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Beneficios de subir escaleras'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Subir las escaleras de tu casa u oficina en lugar de utilizar el elevador, es una excelente
                        opción para comenzar a ejercitarte. Comienza subiendo 2 o 3 pisos y con el paso del tiempo
                        incrementa el número de escalones a subir.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseEscaleras1} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.4}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/saltar.png' />
                  <Button variant='outlined' onClick={handleClickOpenCuerda1}>
                    Saltar Cuerda
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openCuerda1}
                    onClose={handleCloseCuerda1}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Beneficios de saltar la cuerda'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Si cuentas con una mejor condición física, saltar la cuerda durante 15 minutos, brindará grandes
                        beneficios a tu salud. Además de quemar calorías de forma rápida, ya que es un ejercicio
                        cardiovascular, mejora tus reflejos y procesos de respiración. Comienza saltando de forma suave
                        y a un ritmo moderado. Con el tiempo y de acuerdo con cómo te sientas, incrementa la velocidad y
                        la altura de tus saltos.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseCuerda1} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.4}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/bici.png' />
                  <Button variant='outlined' onClick={handleClickOpenBici1}>
                    Andar en bicicleta
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openBici1}
                    onClose={handleCloseBici1}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Beneficios de andar en bicicleta'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        El ciclismo es un excelente ejercicio para comenzar a adoptar un estilo de vida más saludable,
                        ya que no requiere gran esfuerzo físico y es sumamente divertido y práctico. Si te es posible,
                        sustituye dos días a la semana tu manera de transportarte utilizando la bicicleta. Cada dos
                        semanas, incrementa 1 día de uso de bici; verás que además de perder peso y ganar flexibilidad,
                        ahorrarás bastante dinero.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseBici1} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.45}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/mas.png' />
                  <Button variant='outlined' onClick={handleClickOpenMas1}>
                    Más Ejercicios
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openMas1}
                    onClose={handleCloseMas1}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Otros ejercicios'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Si ya has realizado ejercicio, esta rutina es ideal para ti: <br></br>• 15 sentadillas (3 series
                        con espacio de 1 minuto) <br></br>• 15 flexiones/desplantes (3 series con espacio de 1 minuto){' '}
                        <br></br>• 15 abdominales (3 series con espacio de 1 minuto) <br></br>• 15 saltos suelo/cielo (3
                        series con espacio de 1 minuto)
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseMas1} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
            </Box>
          </Collapse>
        </Card>
      </Grid>
      <Grid item xs={12} md={12}>
        <Card>
          <CardMedia sx={{ height: '14.5625rem' }} image='/images/cards/mediana.png' />
          <CardContent>
            <Typography variant='h6' sx={{ mb: 2 }}>
              Actividad Física Moderada
            </Typography>
            <Typography variant='body2'>Seis horas semanales de actividad física</Typography>
          </CardContent>
          <CardActions className='card-action-dense'>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button onClick={handleClick2}>Detalles</Button>
              <IconButton size='small' onClick={handleClick2}>
                <Icon fontSize='1.875rem' icon={collapse2 ? 'tabler:chevron-up' : 'tabler:chevron-down'} />
              </IconButton>
            </Box>
          </CardActions>
          <Collapse in={collapse2}>
            <Divider sx={{ m: '0 !important' }} />
            <Box display='flex' justifyContent='space-around'>
              <Grid item xs={3} md={1.4}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/correr.png' />
                  <Button variant='outlined' onClick={handleClickOpenCaminar2}>
                    Una Caminata
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openCaminar2}
                    onClose={handleCloseCaminar2}
                    aria-labelledby='responsive-dialog-title-caminar'
                  >
                    <DialogTitle id='responsive-dialog-title-caminar'>{'Beneficios de caminar'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Caminar todos los días al menos 30 minutos, reduce el riesgo de sufrir enfermedades
                        cardiovasculares. Para que esta actividad funcione de forma efectiva, debes realizar la caminata
                        de manera continua, es decir, 30 minutos completos y sin interrupciones. Puedes comenzar con un
                        paso normal y con el tiempo, incrementar la velocidad.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseCaminar2} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.47}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/escaleras.png' />
                  <Button variant='outlined' onClick={handleClickOpenEscaleras2}>
                    Subir escaleras
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openEscaleras2}
                    onClose={handleCloseEscaleras2}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Beneficios de subir escaleras'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Subir las escaleras de tu casa u oficina en lugar de utilizar el elevador, es una excelente
                        opción para comenzar a ejercitarte. Comienza subiendo 2 o 3 pisos y con el paso del tiempo
                        incrementa el número de escalones a subir.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseEscaleras2} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.4}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/saltar.png' />
                  <Button variant='outlined' onClick={handleClickOpenCuerda2}>
                    Saltar Cuerda
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openCuerda2}
                    onClose={handleCloseCuerda2}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Beneficios de saltar la cuerda'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Si cuentas con una mejor condición física, saltar la cuerda durante 15 minutos, brindará grandes
                        beneficios a tu salud. Además de quemar calorías de forma rápida, ya que es un ejercicio
                        cardiovascular, mejora tus reflejos y procesos de respiración. Comienza saltando de forma suave
                        y a un ritmo moderado. Con el tiempo y de acuerdo con cómo te sientas, incrementa la velocidad y
                        la altura de tus saltos.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseCuerda2} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.4}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/bici.png' />
                  <Button variant='outlined' onClick={handleClickOpenBici2}>
                    Andar en bicicleta
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openBici2}
                    onClose={handleCloseBici2}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Beneficios de andar en bicicleta'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        El ciclismo es un excelente ejercicio para comenzar a adoptar un estilo de vida más saludable,
                        ya que no requiere gran esfuerzo físico y es sumamente divertido y práctico. Si te es posible,
                        sustituye dos días a la semana tu manera de transportarte utilizando la bicicleta. Cada dos
                        semanas, incrementa 1 día de uso de bici; verás que además de perder peso y ganar flexibilidad,
                        ahorrarás bastante dinero.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseBici2} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.45}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/mas.png' />
                  <Button variant='outlined' onClick={handleClickOpenMas2}>
                    Más Ejercicios
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openMas2}
                    onClose={handleCloseMas2}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Otros ejercicios'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Si ya has realizado ejercicio, esta rutina es ideal para ti: <br></br>• 15 sentadillas (3 series
                        con espacio de 1 minuto) <br></br>• 15 flexiones/desplantes (3 series con espacio de 1 minuto){' '}
                        <br></br>• 15 abdominales (3 series con espacio de 1 minuto) <br></br>• 15 saltos suelo/cielo (3
                        series con espacio de 1 minuto)
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseMas2} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
            </Box>
          </Collapse>
        </Card>
      </Grid>
      <Grid item xs={12} md={12}>
        <Card>
          <CardMedia sx={{ height: '14.5625rem' }} image='/images/cards/intensa.jpg' />
          <CardContent>
            <Typography variant='h6' sx={{ mb: 2 }}>
              Actividad Física Intensa
            </Typography>
            <Typography variant='body2'>De 4 a 5 horas de actividad física al día</Typography>
          </CardContent>
          <CardActions className='card-action-dense'>
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Button onClick={handleClick3}>Detalles</Button>
              <IconButton size='small' onClick={handleClick3}>
                <Icon fontSize='1.875rem' icon={collapse3 ? 'tabler:chevron-up' : 'tabler:chevron-down'} />
              </IconButton>
            </Box>
          </CardActions>
          <Collapse in={collapse3}>
            <Divider sx={{ m: '0 !important' }} />
            <Box display='flex' justifyContent='space-around'>
              <Grid item xs={3} md={1.4}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/correr.png' />
                  <Button variant='outlined' onClick={handleClickOpenCaminar3}>
                    Una Caminata
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openCaminar3}
                    onClose={handleCloseCaminar3}
                    aria-labelledby='responsive-dialog-title-caminar'
                  >
                    <DialogTitle id='responsive-dialog-title-caminar'>{'Beneficios de caminar'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Caminar todos los días al menos 30 minutos, reduce el riesgo de sufrir enfermedades
                        cardiovasculares. Para que esta actividad funcione de forma efectiva, debes realizar la caminata
                        de manera continua, es decir, 30 minutos completos y sin interrupciones. Puedes comenzar con un
                        paso normal y con el tiempo, incrementar la velocidad.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseCaminar3} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.47}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/escaleras.png' />
                  <Button variant='outlined' onClick={handleClickOpenEscaleras3}>
                    Subir escaleras
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openEscaleras3}
                    onClose={handleCloseEscaleras3}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Beneficios de subir escaleras'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Subir las escaleras de tu casa u oficina en lugar de utilizar el elevador, es una excelente
                        opción para comenzar a ejercitarte. Comienza subiendo 2 o 3 pisos y con el paso del tiempo
                        incrementa el número de escalones a subir.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseEscaleras3} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.4}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/saltar.png' />
                  <Button variant='outlined' onClick={handleClickOpenCuerda3}>
                    Saltar Cuerda
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openCuerda3}
                    onClose={handleCloseCuerda3}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Beneficios de saltar la cuerda'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Si cuentas con una mejor condición física, saltar la cuerda durante 15 minutos, brindará grandes
                        beneficios a tu salud. Además de quemar calorías de forma rápida, ya que es un ejercicio
                        cardiovascular, mejora tus reflejos y procesos de respiración. Comienza saltando de forma suave
                        y a un ritmo moderado. Con el tiempo y de acuerdo con cómo te sientas, incrementa la velocidad y
                        la altura de tus saltos.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseCuerda3} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.4}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/bici.png' />
                  <Button variant='outlined' onClick={handleClickOpenBici3}>
                    Andar en bicicleta
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openBici3}
                    onClose={handleCloseBici3}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Beneficios de andar en bicicleta'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        El ciclismo es un excelente ejercicio para comenzar a adoptar un estilo de vida más saludable,
                        ya que no requiere gran esfuerzo físico y es sumamente divertido y práctico. Si te es posible,
                        sustituye dos días a la semana tu manera de transportarte utilizando la bicicleta. Cada dos
                        semanas, incrementa 1 día de uso de bici; verás que además de perder peso y ganar flexibilidad,
                        ahorrarás bastante dinero.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseBici3} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
              <Grid item xs={3} md={1.45}>
                <Card>
                  <CardMedia sx={{ height: '5rem', width: '5rem' }} image='/images/cards/mas.png' />
                  <Button variant='outlined' onClick={handleClickOpenMas3}>
                    Más Ejercicios
                  </Button>
                  <Dialog
                    fullScreen={fullScreen}
                    open={openMas3}
                    onClose={handleCloseMas3}
                    aria-labelledby='responsive-dialog-title'
                  >
                    <DialogTitle id='responsive-dialog-title'>{'Otros ejercicios'}</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Si ya has realizado ejercicio, esta rutina es ideal para ti: <br></br>• 15 sentadillas (3 series
                        con espacio de 1 minuto) <br></br>• 15 flexiones/desplantes (3 series con espacio de 1 minuto){' '}
                        <br></br>• 15 abdominales (3 series con espacio de 1 minuto) <br></br>• 15 saltos suelo/cielo (3
                        series con espacio de 1 minuto)
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleCloseMas3} autoFocus>
                        Entiendo
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Card>
              </Grid>
            </Box>
          </Collapse>
        </Card>
      </Grid>
    </Grid>
  )
}

export default HagamosEjercicio
