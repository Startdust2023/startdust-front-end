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
import { useState } from 'react'
import { InputLabel } from '@mui/material'
import { Select } from '@mui/material'
import { colors, alimentosOrigenAnimal, alimentosOrigenVegetal, alimentosGrasos } from 'src/@core/utils/constants'
import CardMedia from '@mui/material/CardMedia'
import ViewRecipe from 'src/views/pages/generare-recipe/ViewRecipe'

const GenerateRecipe = () => {
  const [vegetal, setVegetal] = useState([])
  const [animal, setAnimal] = useState([])
  const [grasos, setGrasos] = useState([])

  const [openRecipe, setOpenRecipe] = useState(false)
  const [itemSelected, setItemSelected] = useState(null)

  const hangleRecipe = () => {
    setOpenRecipe(false)
  }
  const handleChangeAnimal = event => {
    setAnimal(event.target.value)
  }
  const handleChangeVegetal = event => {
    setVegetal(event.target.value)
  }
  const handleChangeGrasos = event => {
    setGrasos(event.target.value)
  }

  const ItemRecipe = ({ item }) => {
    console.log(item)
    return (
      <Card>
        <CardMedia sx={{ height: { xs: 150, sm: 200 } }} image={item.image} />
        <CardContent>
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
        <CustomRoutesView routes={[routes.home, routes.generateRecipe]} />
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ p: 4, border: 2, borderColor: colors.green }}>
          <Typography align='justify'>
            A continuación se presentan distintos grupos de alimentos y los alimentos pertenencientes a cada uno de
            ellos. Selecciona los alimentos con los que cuentas para poder generar una receta especialmente para ti.
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
          </Grid>
        </Card>
      </Grid>
      <Grid item xs={12} sx={{ minHeight: 300 }} container>
        <Grid item xs={6} sm={4}>
          {ItemRecipe({
            item: {
              name: 'receta',
              description: 'description 1',
              image: '/images/pages/home/3.jpg',
              instruccions: 'Instrucccions'
            }
          })}
        </Grid>
      </Grid>
      {itemSelected ? <ViewRecipe item={itemSelected} open={openRecipe} toggle={hangleRecipe} /> : null}
    </Grid>
  )
}

export default GenerateRecipe
