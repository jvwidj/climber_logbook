import React from 'react'
import { Card, Button  } from 'react-bootstrap'

const ClimbCard = ({type, grade, description}) => {
  return (
    <div>
            <Card className='my-2'>
            <Card.Header as="h5">{type}</Card.Header>
            <Card.Body>
                <Card.Title>{grade}</Card.Title>
                <Card.Text>
                {description}
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>  
            </Card>
    </div>
  )
}

export default ClimbCard