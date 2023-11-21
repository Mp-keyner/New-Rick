import React from 'react'
import Layout from './components/Layout'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Character from './components/Character'
import Nav from './components/Nav'

const App = () => {
  return (
    <>
      <Nav/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}/>
        <Route path='/:id' element={<Character/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App