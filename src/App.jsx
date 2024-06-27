import { useState } from 'react'

import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Rform from './register'
import Home from '../src/home'
import Login from '../src/login'
import Form from '../src/form/Form'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>This is home page</h1>} />
        <Route path='/about' element={<h1>This is about page</h1>} />
        <Route path='/register' element={<Rform/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>}/>
      
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
