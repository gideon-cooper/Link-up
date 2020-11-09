import React, { useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Search from './Search'
import CardColumns from 'react-bootstrap/CardColumns'
import Event from './Event'

const styles = {
  container: {
    height: '80vh',
  },
}
export default function Home() {
  return (
    <>
      <Search />
      <Container style={styles.container}>
        <CardColumns>
          <Event />
          <Event />
          <Event />
          <Event />
          <Event />
        </CardColumns>
      </Container>
    </>
  )
}
