import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Navigation from './components/Navigation'
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
    </div>
  )
}

export default App
