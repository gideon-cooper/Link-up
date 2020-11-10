import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default function Event(props) {
  console.log(props)
  return (
    <Link to={`/eventDetails/${props.id}`} style={{ textDecoration: 'none' }}>
      <Card className='text-white' style={{ width: '18rem', height: '11rem' }}>
        <Card.Img src={props.image} style={{ width: '100%', height: '100%' }} />
        <Card.ImgOverlay style={{ display: 'flex', flexDirection: 'column' }}>
          <Card.Title style={{ marginTop: 'auto' }}>{props.name}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Link>
  )
}
