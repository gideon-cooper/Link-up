import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Event from './Event'
import Image from 'react-bootstrap/Image'
import { useSelector, useDispatch } from 'react-redux'
import CardColumns from 'react-bootstrap/CardColumns'
import firebase from '../firebase/firebase'
import { getUserEvents } from '../actions'

const styles = {
  container: {
    height: '100vh',
    padding: 0,
  },
  topRow: {
    height: '60%',
  },
  bottomRow: {
    height: '60%',
  },
  leftCol: {
    padding: 0,
    maxWidth: '100%',
    maxHeight: '100%',
    flex: 1.2,
  },
  rightCol: {},
  image: {
    width: '100%',
    height: '100%',
  },
  inline: {
    display: 'inline',
    marginLeft: '0.5em',
  },
  dot: {
    listStyle: 'none',
  },
  bottomCol: {
    marginTop: '1em',
  },
}

export default function Profile() {
  const events = useSelector((state) => state.getUserEvents)
  console.log(events, 'EV')
  const dispatch = useDispatch()
  useEffect(() => {
    const eventsRef = firebase
      .firestore()
      .collection('users')
      .doc(localStorage.getItem('authToken'))
      .get()
      .then((res) => {
        console.log(res.data().events)
        dispatch(getUserEvents(res.data().events))
      })
  }, [])
  return (
    <Container style={styles.container}>
      <Row style={styles.topRow}>
        <Col style={styles.leftCol}>
          <Image
            src='https://i.stack.imgur.com/l60Hf.png'
            style={styles.image}
          />
        </Col>
        <Col>
          <h1>NAME</h1>
        </Col>
      </Row>
      <Row style={styles.bottomRow}>
        <Col style={styles.bottomCol}>
          <CardColumns>
            {events.map((event) => (
              <Event key={event.id} {...event} />
            ))}
          </CardColumns>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}
