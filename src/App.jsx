import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.scss'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import Login from './pages/Login'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
