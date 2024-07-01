import { lazy } from 'react'
import {Route, Navigate, Routes, useLocation} from 'react-router-dom'
import { CheckPathMatch, paths } from './helpers'
import path from 'path'
const HomePage = lazy (() => import('pages/HomePage'))
const PublicRoutes: React.FC = () => {
  const location = useLocation()

  const isMatch = checkPathMatch(location.pathname, paths)

  return (
    <Routes>
      <Route path ={path.home}/>
      <Route path = '*' element={!isMatch ? <Navigate to={path.home}/> : null} />
    </Routes>
  )
}

export default PublicRoutes