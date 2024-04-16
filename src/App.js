import React from 'react'
import './App.css';
import Header from './components/header/header';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index'
import About from './pages/About';
const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact={true} path='/' element={<Home/>}/>
        <Route exact={true} path='/about' element={<About/>}/>

      </Routes>
      </BrowserRouter>
  )
}


export default App
