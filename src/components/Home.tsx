import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Search from './Search'
import CardColumns from 'react-bootstrap/CardColumns'
import Event from './Event'
import { useDispatch, useSelector } from 'react-redux'
import firebase from '../firebase/firebase'
import { addEvent } from '../actions'

const styles = {
  container: {
    height: '80vh',
  },
}
export default function Home() {
  const dispatch = useDispatch()
  const events = useSelector((state) => state.addEvent)
  useEffect(() => {
    firebase
      .firestore()
      .collection('events')
      .get()
      .then((event) =>
        events.length === 0
          ? event.docs.map((event) => {
              const data = { id: event.id, ...event.data() }
              dispatch(addEvent(data))
            })
          : null
      )
  }, [])
  console.log(events)
  return (
    <>
      <Search />
      <Container style={styles.container}>
        <CardColumns>
          {events.map((event) => (
            <Event key={event.id} {...event} />
          ))}
        </CardColumns>
      </Container>
    </>
  )
}
