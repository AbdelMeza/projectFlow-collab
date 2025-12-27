import { Route, Routes } from 'react-router-dom'
import SignupPage from '../Pages/SignupPage/SignupPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import HomePage from '../Pages/HomePage/HomePage'
import authentificationManagement from '../Store/authentificationManagement'
import { useEffect } from 'react'
import RequireAuth from '../RoutesProtection/requireAuth'
import Dashboard from '../Pages/Dashboard/Dashboard'

function App() {
  return <Routes>
    <Route path='/signup' element={<SignupPage />} ></Route>
    <Route path='/login' element={<LoginPage />} ></Route>
    <Route path='/' element={<HomePage />} ></Route>
    <Route path='/dashboard' element={
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    } >
      <Route path='' element></Route>
      <Route path='projects' element></Route>
      <Route path='requests' element></Route>
      <Route path='clients' element></Route>
    </Route>
  </Routes>
}

export default App
