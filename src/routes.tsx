import { Navigate, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Auth from './pages/auth'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/auth', element: <Auth /> },
  { path: '*', element: <div>404 NOT FOUND</div> },
  { path: '/admin', element: <Navigate to="/" replace /> },
])

export default router
