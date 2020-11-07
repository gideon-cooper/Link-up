import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Search from './Search'

const styles = {
  container: {
    backgroundColor: 'red',
    height: '80vh',
  },
}
export default function Home() {
  return (
    <>
      <Search />
      <Container style={styles.container}></Container>
    </>
  )
}
