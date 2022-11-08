import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar.jsx'
import Game from './pages/Game/Game'
import { useSelector } from 'react-redux'
import Help from './pages/Help/Help'
import { Routes, Route } from 'react-router-dom'
import Error from './pages/Error/Error'
import MainPage from './pages/MainPage/MainPage'
function App() {
  let dark = useSelector((state) => state.theme.isdark)
  return (
    <div className={dark ? 'dark-mood ' : ''}>
      <Navbar />{' '}
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/help' element={<Help />} />
        <Route path='/game' element={<Game />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
