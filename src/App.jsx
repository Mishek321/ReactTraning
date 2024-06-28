import { useState } from 'react'

import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Rform from './register'
import Home from '../src/home'
import Login from '../src/login'
import Form from '../src/form/Form'
import LearningComponent from './LearningComponent'
import HeadingComponent from './HeadingComponent'
import Card from './Card'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<h1>This is about page</h1>} />
        <Route path='/register' element={<Rform/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/button' element={<LearningComponent/>}/>
        <Route path='heading' element={<HeadingComponent/>}/>
        <Route path='/card' element={<Card/>}/>
      
        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
