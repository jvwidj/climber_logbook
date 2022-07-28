import React from 'react'
import { useSelector } from 'react-redux'

//Bootstrap
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const ListLocation = () => {

    const navigate = useNavigate()
    const { locationList } = useSelector((store) => store.location)
    //console.log( locationList )

  return (
    <div className=''>
    <Container fluid className='d-flex justify-content-center'>
    <Row>

    <Col>
    <h3>Outdoor</h3>       
    <Card className="mt-2" style={{ width: '18rem' }}>
        {locationList.map(location => (
            location.is_outdoor ? 
            
            <ListGroup variant="flush">
                <ListGroup.Item 
                    onClick={() => navigate("/climb")}
                    key={location.id}>{location.location_name}</ListGroup.Item>
                </ListGroup> 
            
            : null
        ))}       
        </Card>
    </Col>


    <Col>
        <h3>Indoor</h3>
        <Card className="mt-2" style={{ width: '18rem' }}>
        {locationList.map(location => (
            location.is_outdoor ? 
            null:
            <ListGroup variant="flush">
                <ListGroup.Item 
                    onClick={() => navigate("/session")}
                    key={location.id}>{location.location_name}</ListGroup.Item>
                </ListGroup> 
            
        ))}       
        </Card>
    </Col>

    </Row>
    </Container>
    </div>
  )
}

export default ListLocation