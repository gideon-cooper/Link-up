import React, { ReactComponentElement, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Search from './Search'
import CardColumns from 'react-bootstrap/CardColumns'
import Event from './Event'
import { useSelector } from 'react-redux'

const styles = {
  container: {
    height: '80vh',
  },
}
export default function Home() {
  const events = useSelector((state) => state.addEvent)
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
