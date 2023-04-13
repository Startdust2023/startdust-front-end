// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { CustomRoutesView } from 'src/@core/components/custom-routes-view'
import routes from 'src/@core/utils/routes'
import { Button, Collapse, FormControl } from '@mui/material'
import Box from '@mui/material/Box'
import { MenuItem } from '@mui/material'
import { Chip } from '@mui/material'
import { useState } from 'react'
import { InputLabel } from '@mui/material'
import { Select } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import ViewRecipe from 'src/views/pages/generare-recipe/ViewRecipe'
import {
  recetas,
  colors,
  alimentosOrigenAnimal,
  alimentosOrigenVegetal,
  alimentosGrasos
} from 'src/@core/utils/constants'
import { CardActions } from '@mui/material'
import IconButton from '@mui/material/IconButton'
// ** Icon Imports
import Icon from 'src/@core/components/icon'
const GenerateRecipe = () => {
  const [openRecipe, setOpenRecipe] = useState(false)
  const [itemSelected, setItemSelected] = useState(null)
  const [openDesayunos, setOpenDesayunos] = useState(false)

  const [vegetal, setVegetal] = useState([])
  const [animal, setAnimal] = useState([])
  const [grasos, setGrasos] = useState([])

  const handleChangeAnimal = event => {
    setAnimal(event.target.value)
  }
  const handleChangeVegetal = event => {
    setVegetal(event.target.value)
  }
  const handleChangeGrasos = event => {
    setGrasos(event.target.value)
  }

  const handleDesayuno = () => {
    setOpenDesayunos(!openDesayunos)
  }

  const hangleRecipe = () => {
    setOpenRecipe(false)
  }

  const ItemRecipe = ({ item }) => {
    console.log(item)
    return (
      <Card>
        <CardMedia sx={{ height: { xs: 150, sm: 200 } }} image={item.image} />
        <CardContent sx={{ height: 100 }}>
          <Typography>{item.name}</Typography>
        </CardContent>
        <Button
          onClick={() => {
            setItemSelected(item)
            setOpenRecipe(true)
          }}
          variant='contained'
          sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        >
          Ver Receta
        </Button>
      </Card>
    )
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CustomRoutesView routes={[routes.home, routes.menu]} />
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ p: 4, border: 2, borderColor: colors.green }}>
          <Typography align='justify'>
            Este es su menú del dia, que fue recomendado por nutriologos en base a sus necesidades y sus gustos
          </Typography>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ p: 6, minHeight: 100 }}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='alimentos-vegetales-label'>Origen Vegetal</InputLabel>
                <Select
                  multiple
                  label='Origen Vegetal'
                  value={vegetal}
                  id='alimentos-vegetales'
                  onChange={handleChangeVegetal}
                  labelId='alimentos-vegetales-label'
                  MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                  renderValue={selected => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      {selected.map(value => (
                        <Chip key={value} label={value} sx={{ m: 0.75 }} />
                      ))}
                    </Box>
                  )}
                >
                  {alimentosOrigenVegetal.map(name => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='alimentos-animal-label'>Origen Animal</InputLabel>
                <Select
                  multiple
                  label='Origen Animal'
                  value={animal}
                  id='alimentos-animal'
                  onChange={handleChangeAnimal}
                  labelId='alimentos-animal-label'
                  MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                  renderValue={selected => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      {selected.map(value => (
                        <Chip key={value} label={value} sx={{ m: 0.75 }} />
                      ))}
                    </Box>
                  )}
                >
                  {alimentosOrigenAnimal.map(name => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id='alimentos-Grasos-label'>Grasas y Aceites</InputLabel>
                <Select
                  multiple
                  label='Grasas y Aceites'
                  value={grasos}
                  id='alimentos-grasos'
                  onChange={handleChangeGrasos}
                  labelId='alimentos-grasos-label'
                  MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
                  renderValue={selected => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      {selected.map(value => (
                        <Chip key={value} label={value} sx={{ m: 0.75 }} />
                      ))}
                    </Box>
                  )}
                >
                  {alimentosGrasos.map(name => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} container sx={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant='contained'>Generar Recetas</Button>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ p: 6, minHeight: 100 }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Card>
                <CardActions className='card-action-dense'>
                  <Box
                    sx={{
                      mt: 2,
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                    onClick={handleDesayuno}
                  >
                    <Typography variant='h6' sx={{ mb: 2 }}>
                      Desayuno
                    </Typography>
                    <IconButton size='small'>
                      <Icon fontSize='1.875rem' icon={openDesayunos ? 'tabler:chevron-up' : 'tabler:chevron-down'} />
                    </IconButton>
                  </Box>
                </CardActions>
                <Collapse in={openDesayunos}>
                  <Grid container spacing={4}>
                    {recetas.map(item => {
                      return (
                        <Grid item xs={6} sm={4}>
                          <ItemRecipe item={item} />
                        </Grid>
                      )
                    })}
                  </Grid>
                </Collapse>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardActions className='card-action-dense'>
                  <Box
                    sx={{
                      mt: 2,
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography variant='h6' sx={{ mb: 2 }}>
                      Merienda de la mañana
                    </Typography>
                    <IconButton size='small'>
                      <Icon fontSize='1.875rem' icon={'tabler:chevron-down'} />
                    </IconButton>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardActions className='card-action-dense'>
                  <Box
                    sx={{
                      mt: 2,
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography variant='h6' sx={{ mb: 2 }}>
                      Almerzo
                    </Typography>
                    <IconButton size='small'>
                      <Icon fontSize='1.875rem' icon={'tabler:chevron-down'} />
                    </IconButton>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardActions className='card-action-dense'>
                  <Box
                    sx={{
                      mt: 2,
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography variant='h6' sx={{ mb: 2 }}>
                      Merienda de la tarde
                    </Typography>
                    <IconButton size='small'>
                      <Icon fontSize='1.875rem' icon={'tabler:chevron-down'} />
                    </IconButton>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <CardActions className='card-action-dense'>
                  <Box
                    sx={{
                      mt: 2,
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    <Typography variant='h6' sx={{ mb: 2 }}>
                      Cena
                    </Typography>
                    <IconButton size='small'>
                      <Icon fontSize='1.875rem' icon={'tabler:chevron-down'} />
                    </IconButton>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      {itemSelected ? <ViewRecipe item={itemSelected} open={openRecipe} toggle={hangleRecipe} /> : null}
    </Grid>
  )
}

export default GenerateRecipe
