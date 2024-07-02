import { lazy } from 'react'
import { useAppDispatch } from 'store'
import { Route, Navigate, Routes, useLocation} from 'react-router-dom'
import { checkPathMatch, paths } from './helpers'
import path from 'path'
const HomePage = lazy (() => import('pages/HomePage'))
const PublicRoutes: React.FC = () => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const isMatch = checkPathMatch(location.pathname, paths)s

  return (
    <Routes>
      <Route path ={path.home}/>
      <Route path = '*' element={!isMatch ? <Navigate to={path.home}/> : null} />
    </Routes>
  )
}

export default PublicRoutes