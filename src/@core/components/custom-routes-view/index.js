import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'
import Icon from 'src/@core/components/icon'

export const CustomRoutesView = ({ routes }) => {
  const router = useRouter()

  const item = (route, isLast, key) => {
    return (
      <Box key={key + route.name}>
        <Typography
          variant='h6'
          onClick={() => {
            if (!isLast) {
              router.push(route.path)
            }
          }}
          sx={{
            color: isLast ? 'primary' : 'primary.main',
            mx: 2,
            cursor: isLast ? 'default' : 'pointer'
          }}
        >
          {route.name}
        </Typography>
      </Box>
    )
  }
  return (
    <Box sx={{ fontSize: '2.5em', display: 'flex', my: 2, ml: 4 }}>
      {routes.map((value, index) => {
        return (
          <>
            {item(value, routes.length === index + 1, index)}
            {routes.length !== index + 1 ? (
              <Typography sx={{ color: 'primary.main' }}>
                <Icon icon={'material-symbols:arrow-right'} />
              </Typography>
            ) : null}
          </>
        )
      })}
    </Box>
  )
}
