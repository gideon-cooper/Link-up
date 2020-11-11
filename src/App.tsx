import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Navigation from './components/Navigation'
import Profile from './components/Profile'
import EventDetails from './components/EventDetails'
function App() {
  return (
    <div className='App'>
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/eventDetails/:id' component={EventDetails} />
    </div>
  )
}

export default App
