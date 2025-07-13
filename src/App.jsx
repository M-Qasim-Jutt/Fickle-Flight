// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from "./Pages/Home/Home"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hotels from './Pages/Hotels/Hotels';
import Search from './Pages/Search/Search';
import Offers from './Pages/Offers/Offers';
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    {/* <Navbar/>
    <Home/> */}
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<Hotels/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/offers' element={<Offers/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
