import { Navigate, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home'
import NotFoundPage from './components/shared/not-found'
import WorkInProgressPage from './components/shared/work-in-progress'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/dashboard', element: <WorkInProgressPage /> },
  { path: '/auth', element: <WorkInProgressPage /> },
  { path: '*', element: <NotFoundPage /> },
  { path: '/admin', element: <Navigate to="/" replace /> },
])

export default router
