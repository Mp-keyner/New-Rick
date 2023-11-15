import React from 'react'
import Layout from './components/Layout'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Character from './components/Character'

const App = () => {
  return (
    <>
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