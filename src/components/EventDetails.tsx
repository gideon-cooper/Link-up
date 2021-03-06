import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { removeUserEvent, getUserEvents, addUserEvent } from '../actions'
import firebase from '../firebase/firebase'
import './media.css'

const styles = {
  container: {
    height: '100vh',
    padding: 0,
  },
  topRow: {
    height: '50%',
  },
  bottomRow: {
    height: '50%',
  },
  leftCol: {},
  rightCol: {
    width: '100%',
    height: '100%',
    textAlign: 'center' as 'center',
  },
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
  bottomImage: {
    width: '100%',
  },
}

export default function EventDetails(props) {
  const params: object = useParams()
  const dispatch = useDispatch()
  const events = useSelector((state) => state.addEvent)
  const userEvents = useSelector((state) => state.getUserEvents)

  const eventDetails = events.find(
    (event) => event.id === Object.values(params)[0]
  )

  const handleClick = () => {
    const newAttendees: number = (eventDetails.attendees += 1)
    const newEvent = {
      ...eventDetails,
      attendees: newAttendees,
    }

    {
      localStorage.getItem('authToken')
        ? firebase
            .firestore()
            .collection('users')
            .doc(localStorage.getItem('authToken'))
            .update({
              events: firebase.firestore.FieldValue.arrayUnion(newEvent),
            })
            .then(() => {
              firebase
                .firestore()
                .collection('events')
                .doc(newEvent.id)
                .update({
                  attendees: newEvent.attendees,
                })
              dispatch(addUserEvent(newEvent))
            })
        : props.history.push('/login')
    }
  }
  const handleUnattend = () => {
    firebase
      .firestore()
      .collection('users')
      .doc(localStorage.getItem('authToken'))
      .update({
        events: firebase.firestore.FieldValue.arrayRemove(eventDetails),
      })
      .then(() => {
        firebase
          .firestore()
          .collection('events')
          .doc(eventDetails.id)
          .update({
            attendees: eventDetails.attendees -= 1,
          })
        dispatch(removeUserEvent(eventDetails))
      })
  }
  console.log(userEvents)
  return (
    <>
      {eventDetails ? (
        <Container style={styles.container}>
          <Row className='topRow' style={styles.topRow}>
            <Col
              className='topCol'
              style={{
                padding: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <Image src={eventDetails.image} style={styles.image} />
            </Col>
            <Col className='botCol' style={styles.rightCol}>
              <h1>{eventDetails.name}</h1>
              <ul>
                <li style={styles.dot}>
                  <i className='fas fa-map-marker-alt'></i>
                  <p style={styles.inline}>{eventDetails.location}</p>
                </li>
                <li style={styles.dot}>
                  <i className='fas fa-users'></i>
                  <p style={styles.inline}>
                    {eventDetails.attendees} Attendees
                  </p>
                </li>
              </ul>
              {userEvents.find(
                (event) => event.id === Object.values(params)[0]
              ) ? (
                <Button onClick={handleUnattend} variant='danger'>
                  Unattend
                </Button>
              ) : (
                <Button onClick={handleClick} variant='success'>
                  Link up
                </Button>
              )}
            </Col>
          </Row>
          <Row className='bottomRow' style={styles.bottomRow}>
            <Col style={styles.bottomCol}>
              <h1>About</h1>
              <p>{eventDetails.description}</p>
            </Col>
          </Row>
        </Container>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  )
}
