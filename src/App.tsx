import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navigation from './components/Navigation'
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Route path='/' component={Home} />
    </div>
  )
}

export default App
