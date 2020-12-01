import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Alert from 'react-bootstrap/Alert'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { addEvent, search } from '../actions'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const styles = {
  searchContainer: {
    height: '20vh',
    backgroundColor: '#E51937',
  },
  searchText: {
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center' as 'center',
  },
  text: {
    fontSize: '1em',
    letterSpacing: 4,
    maxWidth: '100%',
    height: '100%',
  },
  searchBarContainer: {
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  button: { width: '30%', display: 'inline' },
  input: {
    width: '70%',
    marginRight: 0,
    display: 'inline',
  },
}

export default function Search(props) {
  const history = useHistory()

  const dispatch = useDispatch()
  const [searchDetails, setSearchDetails] = useState('')
  const events = useSelector((state) => state.addEvent)

  const handleClick = (event) => {
    event.preventDefault()
    const regex = new RegExp(searchDetails, 'gi')
    dispatch(search(events.filter((item) => regex.test(item.name))))
    history.push(`/searchDetails/${searchDetails}`)
  }
  return (
    <Container fluid style={styles.searchContainer}>
      <Row style={styles.searchText}>
        <Row
          style={{ textAlign: 'center', maxWidth: '100%', maxHeight: '100%' }}
        >
          <span style={styles.text}>Find your next Linkup</span>
        </Row>
      </Row>
      <Row style={styles.searchBarContainer}>
        <Form style={styles.form} onSubmit={handleClick}>
          <FormControl
            style={styles.input}
            type='text'
            onChange={(e) => setSearchDetails(e.target.value)}
            placeholder='Search'
            required
          />
          <Button style={styles.button} type='submit'>
            Search
          </Button>
        </Form>
      </Row>
    </Container>
  )
}
