import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
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
    fontSize: '2em',
    color: 'white',
    letterSpacing: 4,
  },
  searchBarContainer: {
    height: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: { display: 'inline' },
  input: {
    width: '70%',
  },
}
export default function Search(props) {
  console.log(props)
  const history = useHistory()
  console.log(history)
  const dispatch = useDispatch()
  const [searchDetails, setSearchDetails] = useState('')
  const events = useSelector((state) => state.addEvent)

  const handleClick = () => {
    const regex = new RegExp(searchDetails, 'gi')
    dispatch(search(events.filter((item) => regex.test(item.name))))
    history.push(`/searchDetails/${searchDetails}`)
  }
  return (
    <Container fluid style={styles.searchContainer}>
      <Row style={styles.searchText}>
        <Row style={{ textAlign: 'center', width: '30%', maxHeight: '100%' }}>
          Find your next Linkup
        </Row>
      </Row>
      <Row style={styles.searchBarContainer}>
        <Form inline style={{ width: '30%', maxHeight: '100%' }}>
          <FormControl
            style={styles.input}
            type='text'
            onChange={(e) => setSearchDetails(e.target.value)}
            placeholder='Search'
          />
          <Button style={styles.button} onClick={handleClick}>
            Search
          </Button>
        </Form>
      </Row>
    </Container>
  )
}
