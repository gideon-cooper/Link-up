import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Container from 'react-bootstrap/Container'
import firebase from '../firebase/firebase'
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default function Login(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const onLoginClick = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .get()
          .then((firestoreDocument) => {
            if (!firestoreDocument.exists) {
              alert('User does not exist.')
              return
            }
            const user = firestoreDocument.data()
            localStorage.setItem('authToken', user.id)
            props.history.push('/')
            window.location.reload()
            console.log('WORK', user)
          })
          .catch((error) => {
            alert(error)
          })
      })
  }

  return (
    <Container style={styles.container}>
      <Form>
        <Form.Text
          style={{ textAlign: 'center', fontSize: '2em', marginBottom: '1em' }}
        >
          Login
        </Form.Text>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            name='email'
            type='email'
            placeholder='Enter email'
          />
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name='password'
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
          />
        </Form.Group>
        <Button onClick={() => onLoginClick()} variant='primary'>
          Submit
        </Button>
      </Form>
    </Container>
  )
}
