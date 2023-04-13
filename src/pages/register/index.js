// ** React Imports
import { useState } from 'react'
import * as React from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Card from '@mui/material/Card'
import SelectMunicipio from 'src/@core/components/SelectMunicipio'
import Box from '@mui/material/Box'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// ** Styled Components
const RegisterIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 600,
  marginTop: theme.spacing(12),
  marginBottom: theme.spacing(12),
  [theme.breakpoints.down(1540)]: {
    maxHeight: 550
  },
  [theme.breakpoints.down('lg')]: {
    maxHeight: 500
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 450
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 600
  },
  [theme.breakpoints.up('xl')]: {
    maxWidth: 750
  }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(1.75),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const Register = () => {
  // ** States
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings
  const imageSource = skin === 'bordered' ? 'auth-v2-register-illustration-bordered' : 'auth-v2-register-illustration'

  return (
    <Box className='content-right' sx={{ backgroundColor: 'background.paper' }}>
      {!hidden ? (
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            alignItems: 'center',
            borderRadius: '20px',
            justifyContent: 'center',
            margin: theme => theme.spacing(8, 0, 8, 8)
          }}
        >
          <RegisterIllustration //Esta es la imagen grande
            alt='register-illustration'
            src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
          />
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
      <RightWrapper>
        <Box
          sx={{
            p: [6, 12],
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <Box sx={{ my: 6 }}>
              <Typography sx={{ mb: 1.5, fontWeight: 500, fontSize: '1.625rem', lineHeight: 1.385 }}>
                El cambio empieza aquí 🚀
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Registrese para disfrutar de mas!</Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <TextField autoFocus fullWidth sx={{ mb: 4 }} label='Nombre (s)' placeholder='Carlos o Erik' />
              <TextField autoFocus fullWidth sx={{ mb: 4 }} label='Apellido (s)' placeholder='Cigarroa o Aban' />
              <TextField fullWidth label='Email' sx={{ mb: 4 }} placeholder='user@email.com' />
              <FormControl fullWidth>
                <InputLabel htmlFor='auth-login-v2-password' autoFocus sx={{ mb: 4 }}>
                  Contraseña
                </InputLabel>
                <OutlinedInput
                  sx={{ mb: 4 }}
                  label='Password'
                  id='auth-login-v2-password'
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onMouseDown={e => e.preventDefault()}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Icon icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} fontSize={20} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <TextField
                autoFocus
                fullWidth
                sx={{ mb: 4 }}
                label='Telefono'
                placeholder='+52 987 6787 9788'
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              />
              <SelectMunicipio sx={{ mb: 4 }} />
              <FormLabel id='demo-radio-buttons-group-label'>Genero</FormLabel>
              <RadioGroup
                sx={{ mb: 4 }}
                aria-labelledby='demo-radio-buttons-group-label'
                defaultValue='none'
                name='radio-buttons-group'
              >
                <FormControlLabel value='Femenino' control={<Radio />} label='Femenino' />
                <FormControlLabel value='Masculino' control={<Radio />} label='Masculino' />
                <FormControlLabel value='No binario' control={<Radio />} label='No binario' />
                <FormControlLabel value='Otro' control={<Radio />} label='Otro' />
                <FormControlLabel value='Prefiero no responder' control={<Radio />} label='Prefiero no responder' />
              </RadioGroup>
              <FormControlLabel
                control={<Checkbox />}
                sx={{ mb: 4, mt: 1.5, '& .MuiFormControlLabel-label': { fontSize: '0.875rem' } }}
                label={
                  <>
                    <Typography variant='body2' component='span'>
                      I agree to{' '}
                    </Typography>
                    <LinkStyled href='/' onClick={e => e.preventDefault()}>
                      Política de privacidad y términos
                    </LinkStyled>
                  </>
                }
              />
              <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
                Iniciar sesión
              </Button>
              <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                <Typography sx={{ color: 'text.secondary', mr: 2 }}>Ya tienes una cuenta?</Typography>
                <Typography variant='body2'>
                  <LinkStyled href='/login' sx={{ fontSize: '1rem' }}>
                    Inicia sesión aquí
                  </LinkStyled>
                </Typography>
              </Box>
              <Divider
                sx={{
                  fontSize: '0.875rem',
                  color: 'text.disabled',
                  '& .MuiDivider-wrapper': { px: 6 },
                  my: theme => `${theme.spacing(6)} !important`
                }}
              >
                o
              </Divider>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <IconButton href='/' component={Link} sx={{ color: '#497ce2' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:facebook' />
                </IconButton>
                <IconButton href='/' component={Link} sx={{ color: '#1da1f2' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:twitter' />
                </IconButton>
                <IconButton
                  href='/'
                  component={Link}
                  onClick={e => e.preventDefault()}
                  sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : 'grey.300') }}
                >
                  <Icon icon='mdi:github' />
                </IconButton>
                <IconButton href='/' component={Link} sx={{ color: '#db4437' }} onClick={e => e.preventDefault()}>
                  <Icon icon='mdi:google' />
                </IconButton>
              </Box>
            </form>
          </Box>
        </Box>
      </RightWrapper>
    </Box>
  )
}
Register.getLayout = page => <BlankLayout>{page}</BlankLayout>
Register.guestGuard = true

export default Register
