import constants from 'src/@core/utils/constants'
import routes from 'src/@core/utils/routes'

const navigation = () => {
  return [
    {
      title: routes.home.name,
      path: routes.home.path,
      icon: 'tabler:smart-home'
    },
    {
      title: routes.ScheduleAppointment.name,
      path: routes.ScheduleAppointment.path,
      icon: 'tabler:smart-home'
    }
  ]
}

export default navigation
