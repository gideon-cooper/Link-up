import React from 'react'
import Search from './Search'
import Container from 'react-bootstrap/Container'
import Event from './Event'
import CardColumns from 'react-bootstrap/CardColumns'
import { useDispatch, useSelector } from 'react-redux'
import firebase from '../firebase/firebase'
import { addEvent } from '../actions'

const styles = {
  container: {
    height: '80vh',
  },
}
export default function SearchDetails() {
  const search = useSelector((state) => state.search)
  console.log(search)
  return (
    <>
      <Search />
      <Container style={styles.container}>
        {search.length === 0 ? (
          <h1>No results found</h1>
        ) : (
          <h1>Your search results...</h1>
        )}
        <CardColumns>
          {search.map((event) => (
            <Event key={event.id} {...event} />
          ))}
        </CardColumns>
      </Container>
    </>
  )
}
