import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default function Event() {
  return (
    <Link to='/eventDetails/1' style={{ textDecoration: 'none' }}>
      <Card className='text-white' style={{ width: '18rem' }}>
        <Card.Img src='https://www.sciencemag.org/sites/default/files/styles/article_main_large/public/dogs_1280p_0.jpg?itok=cnRk0HYq' />
        <Card.ImgOverlay style={{ display: 'flex', flexDirection: 'column' }}>
          <Card.Title style={{ marginTop: 'auto' }}>Card Title</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Link>
  )
}
