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
export default function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const onRegisterClick = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.")
      return
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid
        const data = {
          id: uid,
          events: [],
          email,
        }
        const usersRef = firebase.firestore().collection('users')
        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            console.log('Done')
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
          Register
        </Form.Text>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) => setEmail(e.target.value)}
            type='email'
            placeholder='Enter email'
          />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            placeholder='Password'
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            onChange={(e) => setConfirmPassword(e.target.value)}
            type='password'
            placeholder='Confirm Password'
          />
        </Form.Group>
        <Button onClick={() => onRegisterClick()} variant='primary'>
          Submit
        </Button>
      </Form>
    </Container>
  )
}
