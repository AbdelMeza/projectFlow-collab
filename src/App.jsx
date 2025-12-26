import { Route, Routes } from 'react-router-dom'
import SignupPage from '../Pages/SignupPage/SignupPage'
import LoginPage from '../Pages/LoginPage/LoginPage'
import HomePage from '../Pages/HomePage/HomePage'
import authentificationManagement from '../Store/authentificationManagement'
import { useEffect } from 'react'

function App() {
  const { getUserData, userData } = authentificationManagement()

  useEffect(() => {
    const fetchUserData = async () => {
      await getUserData()
    }

    fetchUserData()
  }, [])

  console.log(userData)
  return <Routes>
    <Route path='/signup' element={<SignupPage />} ></Route>
    <Route path='/login' element={<LoginPage />} ></Route>
    <Route path='/' element={<HomePage />} ></Route>
  </Routes>
}

export default App
