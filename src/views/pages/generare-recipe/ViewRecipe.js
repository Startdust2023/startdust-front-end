// ** MUI Imports
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import { Card } from '@mui/material'
// ** Icon Imports
import Icon from 'src/@core/components/icon'

import { styled, useTheme } from '@mui/material/styles'

const ImgRecipe = styled('img')(({ theme }) => ({
  maxHeight: 300,
  maxWidth: 300
}))

const ViewRecipe = props => {
  // ** Props
  const { open, toggle, item } = props

  const handleClose = () => {
    toggle()
  }

  return (
    <Dialog maxWidth={'xs'} fullWidth open={open} onClose={handleClose} aria-labelledby='form-dialog-title'>
      <DialogTitle id='form-dialog-title'>
        <Typography variant='h5'>{item.name}</Typography>
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
        <Card sx={{ display: 'flex', justifyContent: 'center', mb: 10 }}>
          <ImgRecipe src={item.image} height={200} width={300} />
        </Card>
        <Box sx={{ p: theme => theme.spacing(0, 7, 7) }}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography align='justify'>item.description</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align='justify'>item.instruccions</Typography>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export default ViewRecipe
