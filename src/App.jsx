import { Route, Routes } from 'react-router-dom'
import SignupPage from '../Pages/SignupPage/SignupPage'
import LoginPage from '../Pages/LoginPage/LoginPage'

function App() {
  return <Routes>
    <Route path='/signup' element={<SignupPage/>} ></Route>
    <Route path='/login' element={<LoginPage/>} ></Route>
  </Routes>
}

export default App
