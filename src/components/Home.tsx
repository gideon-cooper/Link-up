import React from 'react'
import Container from 'react-bootstrap/Container'

const styles = {
  container: {
    backgroundColor: 'red',
    height: '80vh',
  },
}
export default function Home() {
  return <Container style={styles.container}></Container>
}
