// ** MUI Imports
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'

const ImgSpinner = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 680,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  },
  [theme.breakpoints.down('xs')]: {
    maxHeight: 500
  }
}))

const LogoAplicacion = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    height: 200,
    width: 'auto'
  },
  [theme.breakpoints.up('sm')]: {
    height: 300,
    width: 'auto'
  }
}))

const FallbackSpinner = ({ sx }) => {
  // ** Hook
  const theme = useTheme()

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        ...sx
      }}
    >
      <LogoAplicacion src={'/images/CoraCierre.png'} />
      <CircularProgress disableShrink sx={{ mt: 6 }} />
    </Box>
  )
}

export default FallbackSpinner
