import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Boxes from './pages/Boxes'
import Clients from './pages/Clients'
import Facturation from './pages/Facturation'
import Parametres from './pages/Parametres'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout><Dashboard /></Layout>} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/boxes" element={<Layout><Boxes /></Layout>} />
        <Route path="/clients" element={<Layout><Clients /></Layout>} />
        <Route path="/facturation" element={<Layout><Facturation /></Layout>} />
        <Route path="/parametres" element={<Layout><Parametres /></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App