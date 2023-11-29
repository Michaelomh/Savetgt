import { Navigate, createBrowserRouter } from 'react-router-dom'
import Home from './pages/[landing]'
import NotFoundPage from './components/shared/not-found'
import WorkInProgressPage from './components/shared/work-in-progress'
import SupportPage from './pages/[landing]/support'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/support', element: <SupportPage /> },
  { path: '/dashboard', element: <WorkInProgressPage /> },
  { path: '/auth', element: <WorkInProgressPage /> },
  { path: '*', element: <NotFoundPage /> },
  { path: '/admin', element: <Navigate to="/" replace /> },
])

export default router
