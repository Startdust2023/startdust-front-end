// ** MUI Imports
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Components
import ModeToggler from 'src/@core/layouts/components/shared-components/ModeToggler'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

import { styled, useTheme } from '@mui/material/styles'

const LogoSaludDigna = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    height: 20,
    width: 'auto'
  },
  [theme.breakpoints.up('sm')]: {
    height: 50,
    width: 'auto'
  }
}))

const LogoAplicacion = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    height: 40,
    width: 'auto'
  },
  [theme.breakpoints.up('sm')]: {
    height: 50,
    width: 'auto'
  }
}))

const AppBarContent = props => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props

  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        <ModeToggler settings={settings} saveSettings={saveSettings} />
      </Box>
      <Box sx={{ alignItems: 'center', display: 'flex' }}>
        <LogoSaludDigna src={'/images/salud_digna_logo.png'} />
        &nbsp;&nbsp;
        <LogoAplicacion src={'/images/CoraCierre.png'} />
      </Box>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <UserDropdown settings={settings} />
      </Box>
    </Box>
  )
}

export default AppBarContent
