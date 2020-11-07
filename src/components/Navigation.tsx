import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'

const styles = {
  nav: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'space-between',
  },
  navRight: {},
  brand: {
    color: '#E51937',
    fontSize: 28,
    letterSpacing: 4,
  },
}

export default function Navigation() {
  return (
    <Navbar style={styles.nav} expand='lg'>
      <Navbar.Brand style={styles.brand}>Linkup</Navbar.Brand>
      <Nav style={styles.navRight}>
        <Nav.Link>Login</Nav.Link>
        <Nav.Link>Register</Nav.Link>
      </Nav>
    </Navbar>
  )
}
