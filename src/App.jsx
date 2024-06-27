import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Routes,Route, Form} from 'react-router-dom'
import Rform from '../src/form'
import Home from '../src/home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>This is home page</h1>} />
        <Route path='/about' element={<h1>This is about page</h1>} />
        <Route path='/form' element={<Rform/>} />
        <Route path='/home' element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
