import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Event from './Event'
import Image from 'react-bootstrap/Image'
import { useSelector, useDispatch } from 'react-redux'
import CardColumns from 'react-bootstrap/CardColumns'
import firebase from '../firebase/firebase'
import { getUserEvents, userInformation } from '../actions'

const styles = {
  container: {
    height: '100vh',
    padding: 0,
  },
  topRow: {
    height: '40%',
  },
  bottomRow: {
    height: '46%',
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
}

export default function Profile(props) {
  const events = useSelector((state) => state.getUserEvents)
  const email = useSelector((state) => state.userInformation)

  return (
    <>
      {localStorage.getItem('authToken') ? (
        <Container style={styles.container}>
          <Row style={styles.topRow}>
            <Col style={{ textAlign: 'center' }}>
              <h1>{email}</h1>
            </Col>
          </Row>
          <Row style={styles.bottomRow}>
            <Col style={styles.bottomCol}>
              <h1
                style={{
                  textAlign: 'center',
                  letterSpacing: 4,
                  color: '#E51937',
                }}
              >
                Upcoming Linkups
              </h1>
              <CardColumns>
                {events.map((event) => (
                  <Event key={event.id} {...event} />
                ))}
              </CardColumns>
            </Col>
          </Row>
        </Container>
      ) : (
        <h1>Please login to see your profile</h1>
      )}
    </>
  )
}
