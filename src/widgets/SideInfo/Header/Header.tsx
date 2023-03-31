import { Block } from '../../../Ui/Block/Block'
import { Typography } from '../../../Ui/Typography/Typography'
import { IoExitOutline } from 'react-icons/io5'
import { useTypedSelector } from '../../../helpers/hooks/useTypedSelector'
import { ROUTES } from '../../../helpers/constants/allRoutes'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '../../../helpers/hooks/useLocalStorage'
import { STORAGE_KEY } from '../../../helpers/constants/localStorageKey'

export const Header = () => {
  const { name } = useTypedSelector((s) => s.user)

  const { setValue } = useLocalStorage(STORAGE_KEY.NAME)
  const navigate = useNavigate()

  const logout = () => {
    setValue('')
    setTimeout(() => {
      navigate(ROUTES.REGISTER)
    }, 50)
  }

  return (
    <Block justify='between'>
      <Typography font='subtitle' color='red'>{`Hi, ${name} !`}</Typography>
      <IoExitOutline
        title={'Exit'}
        size='34px'
        color='#DC143C'
        onClick={logout}
      />
    </Block>
  )
}