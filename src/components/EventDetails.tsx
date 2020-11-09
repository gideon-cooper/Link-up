import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

const styles = {
  container: {
    height: '100vh',
    padding: 0,
  },
  topRow: {
    height: '50%',
  },
  bottomRow: {
    height: '60%',
  },
  leftCol: {
    padding: 0,
    maxWidth: '100%',
    maxHeight: '100%',
    flex: 1.5,
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

export default function EventDetails(props) {
  return (
    <Container style={styles.container}>
      <Row style={styles.topRow}>
        <Col style={styles.leftCol}>
          <Image
            src='https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq'
            style={styles.image}
          />
        </Col>
        <Col>
          <h1>Event Title</h1>
          <ul>
            <li style={styles.dot}>
              <i className='fas fa-map-marker-alt'></i>
              <p style={styles.inline}>Auckland, New Zealand</p>
            </li>
            <li style={styles.dot}>
              <i className='fas fa-users'></i>
              <p style={styles.inline}>100 Attendees</p>
            </li>
          </ul>
          <Button variant='success'>Link up</Button>
        </Col>
      </Row>
      <Row style={styles.bottomRow}>
        <Col style={styles.bottomCol}>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            eum expedita nobis, sapiente incidunt pariatur sed temporibus natus
            explicabo similique perspiciatis aperiam consequatur, quibusdam
            alias, quos voluptatibus numquam assumenda repudiandae.
          </p>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  )
}
