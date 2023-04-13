// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Custom Components Import
import CustomChip from 'src/@core/components/mui/chip'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

const series = [{ data: [63, 66, 79, 92, 105, 80] }]

const CardStatisticsOrder = () => {
  // ** Hook
  const theme = useTheme()

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: '25%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [hexToRGBA(theme.palette.warning.main, 1)],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      show: false,
      padding: {
        top: -20,
        left: -5,
        right: -8,
        bottom: -12
      }
    },
    xaxis: {
      categories: ['6', '5', '4', '3', '2', '1'],
      axisTicks: { show: false },
      axisBorder: { show: false },
      tickPlacement: 'on',
      labels: {
        style: {
          fontSize: '14px',
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily
        }
      }
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardContent>
        <Box sx={{ gap: 2, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Typography variant='h5'>Peso</Typography>
            <Typography variant='body2' sx={{ color: 'text.disabled' }}>
              Últimos 6 meses
            </Typography>
          </Box>
          <CustomChip rounded size='small' skin='light' color='success' label='+15%' />
        </Box>
        <ReactApexcharts type='bar' height={154} series={series} options={options} />
      </CardContent>
    </Card>
  )
}

export default CardStatisticsOrder
