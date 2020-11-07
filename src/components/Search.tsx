import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

const styles = {
  searchContainer: {
    height: '20vh',
    backgroundColor: 'whitesmoke',
  },
  searchText: {
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2em',
  },
  searchBarContainer: {
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}
export default function Search() {
  return (
    <Container fluid style={styles.searchContainer}>
      <Row style={styles.searchText}>
        <Row style={{ textAlign: 'center' }}>Find your next Linkup</Row>
      </Row>
      <Row style={styles.searchBarContainer}>
        <Form inline>
          <FormControl type='text' placeholder='Search' />
          <Button variant='outline-danger'>Search</Button>
        </Form>
      </Row>
    </Container>
  )
}
