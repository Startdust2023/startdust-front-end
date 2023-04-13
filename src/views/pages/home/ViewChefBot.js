// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import { Button, Grid } from '@mui/material'
import { Typography } from '@mui/material'
import { Card } from '@mui/material'
// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { styled, useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import routes from 'src/@core/utils/routes'
import { colors } from 'src/@core/utils/constants'

const ImgRecipe = styled('img')(({ theme }) => ({
  maxHeight: 300,
  maxWidth: 300
}))

const ViewChefBot = props => {
  // ** Props
  const { open, toggle } = props

  const router = useRouter()

  const handleClose = () => {
    toggle()
  }

  return (
    <Dialog maxWidth={'xs'} fullWidth open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>
        <Typography variant='h5'>ChefBot</Typography>
        <IconButton
          size='small'
          onClick={handleClose}
          sx={{
            borderRadius: 1,
            color: 'text.primary',
            width: 40,
            position: 'absolute',
            top: 10,
            right: 10
          }}
        >
          <Icon icon='tabler:x' fontSize='1.125rem' />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ p: theme => theme.spacing(0, 7, 7) }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Button
                variant='contained'
                fullWidth
                onClick={() => {
                  router.push(routes.generateRecipe.path)
                }}
              >
                Generador de Recetas
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant='contained'
                fullWidth
                onClick={() => {
                  router.push(routes.menu.path)
                }}
              >
                Menu Personalizado
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ViewChefBot
