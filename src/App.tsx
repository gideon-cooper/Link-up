import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Navigation from './components/Navigation'
import SearchDetails from './components/SearchDetails'
import Profile from './components/Profile'
import EventDetails from './components/EventDetails'
import firebase from './firebase/firebase'
import { getUserEvents, addEvent } from './actions'
import { useDispatch, useSelector } from 'react-redux'
function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    firebase
      .firestore()
      .collection('events')
      .get()
      .then((event) => {
        event.docs.map((event) => {
          const data: object = { id: event.id, ...event.data() }
          dispatch(addEvent(data))
        })
      })
    {
      localStorage.getItem('authToken')
        ? firebase
            .firestore()
            .collection('users')
            .doc(localStorage.getItem('authToken'))
            .get()
            .then((res) => {
              // console.log(res.data())
              dispatch(getUserEvents(res.data().events))
            })
        : dispatch(getUserEvents([]))
    }
  }, [])

  return (
    <div className='App'>
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/register' component={Register} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/eventDetails/:id' component={EventDetails} />
      <Route exact path='/searchDetails/:search' component={SearchDetails} />
    </div>
  )
}

export default App
