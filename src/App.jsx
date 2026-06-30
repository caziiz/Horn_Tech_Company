import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import useScrollToTop from './hooks/useScrollToTop'

function ScrollToTop() {
  useScrollToTop()
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  )
}
