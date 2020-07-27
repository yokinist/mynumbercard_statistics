import { useLocation } from '@reach/router'
import { MenuLinks } from '../constants'

export const usePageName = () => {
  const { pathname } = useLocation()
  const pageName = MenuLinks.find(m => m.page === pathname)?.text
  return { pageName }
}