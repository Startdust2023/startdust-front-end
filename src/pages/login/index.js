// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Components
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import useMediaQuery from '@mui/material/useMediaQuery'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

// ** Hooks
import { useAuth } from 'src/hooks/useAuth'
import useBgColor from 'src/@core/hooks/useBgColor'
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'
import AppBarContent from 'src/layouts/components/vertical/AppBarContent'
// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'
import { useRouter } from 'next/router'
import routes from 'src/@core/utils/routes'
import { Card } from '@mui/material'

// ** Styled Components
const LoginIllustration = styled('img')(({ theme }) => ({
  zIndex: 2,
  maxHeight: 680,
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
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  email: yup.string().email('Tiene que ser un email válido').required('El correo es requerido'),
  password: yup.string().min(5, 'La contraseña debe de tener 5 caracteres').required('La contraseña es requerida')
})

const defaultValues = {
  password: 'admin',
  email: 'admin@vuexy.com'
}

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

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  // ** Hooks
  const auth = useAuth()
  const theme = useTheme()
  const bgColors = useBgColor()
  const { settings } = useSettings()
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  // ** Vars
  const { skin } = settings

  const router = useRouter()

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema)
  })

  const onSubmit = data => {
    const { email, password } = data
    auth.login({ email, password, rememberMe }, () => {
      setError('email', {
        type: 'manual',
        message: 'Correo o contraseña inválida'
      })
    })
  }
  const imageSource = skin === 'bordered' ? 'auth-v2-login-illustration-bordered' : 'auth-v2-login-illustration'

  return (
    <>
      <Box sx={{ p: 3, position: 'fixed', top: 0, width: '100%', zIndex: 1 }}>
        <Card sx={{ height: 70, width: '100%', display: 'flex' }}>
          <Box sx={{ px: 6, alignItems: 'center', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <LogoSaludDigna src={'/images/salud_digna_logo.png'} />
            &nbsp;&nbsp;
            <LogoAplicacion src={'/images/CoraCierre.png'} />
          </Box>
        </Card>
      </Box>
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
            <LoginIllustration
              alt='login-illustration'
              src={`/images/pages/${imageSource}-${theme.palette.mode}.png`}
            />
            <FooterIllustrationsV2 />
          </Box>
        ) : null}
        <RightWrapper>
          <Box
            sx={{
              p: 6,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Box sx={{ width: '100%', maxWidth: 400, mt: 10 }}>
              <Box sx={{ my: 6, textAlign: 'center', color: 'primary.main' }}>
                <Typography sx={{ mb: 1.5, fontWeight: 'bold', fontSize: '1.625rem', lineHeight: 1.385 }}>
                  {`${themeConfig.templateName}`}
                </Typography>
                <Typography sx={{ color: 'text.secondary' }}>Iniciar Sesión</Typography>
                <Icon icon='mdi:user-circle' fontSize='7em' />
              </Box>
              <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
                <FormControl fullWidth sx={{ mb: 4 }}>
                  <Controller
                    name='email'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <TextField
                        autoFocus
                        label='Correo'
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        error={Boolean(errors.email)}
                        placeholder='admin@vuexy.com'
                      />
                    )}
                  />
                  {errors.email && <FormHelperText sx={{ color: 'error.main' }}>{errors.email.message}</FormHelperText>}
                </FormControl>
                <FormControl fullWidth sx={{ mb: 1.5 }}>
                  <InputLabel htmlFor='auth-login-v2-password' error={Boolean(errors.password)}>
                    Contraseña
                  </InputLabel>
                  <Controller
                    name='password'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <OutlinedInput
                        value={value}
                        onBlur={onBlur}
                        label='Contraseña'
                        onChange={onChange}
                        id='auth-login-v2-password'
                        error={Boolean(errors.password)}
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
                    )}
                  />
                  {errors.password && (
                    <FormHelperText sx={{ color: 'error.main' }} id=''>
                      {errors.password.message}
                    </FormHelperText>
                  )}
                </FormControl>
                <Box
                  sx={{
                    mb: 1.75,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <FormControlLabel
                    label='Recuerdame'
                    control={<Checkbox checked={rememberMe} onChange={e => setRememberMe(e.target.checked)} />}
                  />
                  <LinkStyled href='/forgot-password'>Olvidaste tu contraseña?</LinkStyled>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
                  <Button fullWidth size='large' type='submit' variant='contained' sx={{ mb: 4 }}>
                    Ingresar
                  </Button>
                  <Typography sx={{ color: 'text.secondary', mb: 4 }}>¿Nuevo en la plataforma?</Typography>
                  <Button
                    variant='outlined'
                    fullWidth
                    onClick={() => {
                      router.push(routes.register.path)
                    }}
                  >
                    Registrarse
                  </Button>
                </Box>
              </form>
            </Box>
          </Box>
        </RightWrapper>
      </Box>
    </>
  )
}
LoginPage.getLayout = page => <BlankLayout>{page}</BlankLayout>
LoginPage.guestGuard = true

export default LoginPage
