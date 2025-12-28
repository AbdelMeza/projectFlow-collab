import { Route, Routes } from 'react-router-dom'
import SignupPage from '../Pages/SignupPage/SignupPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import HomePage from '../Pages/HomePage/HomePage'
import RequireAuth from '../RoutesProtection/requireAuth'
import Dashboard from '../Pages/Dashboard/Dashboard'
import ProjectsView from '../Pages/Dashboard/SubPages/Projects/Projects'
import ProjectDetails from '../Pages/Dashboard/SubPages/Projects/ProjectDetails/ProjectDetails'

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
      <Route path='projects' element={<ProjectsView />} ></Route>
      <Route path='projects/:id' element={<ProjectDetails />}></Route>
      <Route path='requests' element></Route>
    </Route>
  </Routes>
}

export default App
