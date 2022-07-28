import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


//Bootstrap
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';

const AddClimbCard = () => {
    const navigate = useNavigate()
    const { selectedLocation } = useSelector((store) => store.selectedLocation)
    
  return (
    <Container>
    <div>Add your climb...</div>
    <Button onClick={() => navigate("/session")}>back</Button>
    <Button onClick={() => navigate("/session")}>add</Button>

    <Col>
        <Row className='my-2'>
        <Card>
            <Card.Body>
                <p>Bouldering at 
                <br/>{selectedLocation}</p>
            </Card.Body>
        </Card>
        </Row>

        <Row className='my-2'>
        <Card>
            <Card.Body>
                <Col>
                    <Dropdown>
                        <Dropdown.Toggle size="sm" variant="secondary" id="dropdown-basic">
                            Type
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Bouldering</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Sport</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Trad</Dropdown.Item>
                        </Dropdown.Menu>
                        </Dropdown>
                </Col>
                <Col>Grading system</Col>
            </Card.Body>
        </Card>
        </Row>

        <Row className='my-2'>
        <Card>
            <Card.Body>
                V1
            </Card.Body>
        </Card>
        </Row>

        <Row className='my-2'>
        <Card>
            <Card.Body>
               Completed <br />
                Attempts
            </Card.Body>
        </Card>
        </Row> 

        <Row className='my-2'>
        <Card>
            <Card.Body>
               Notes <br />
                Rating
            </Card.Body>
        </Card>
        </Row> 

        <Row className='my-2'>
        <Card>
            <Card.Body>
               Upload Photo/Vid
            </Card.Body>
        </Card>
        </Row> 


    </Col>
    </Container>
  )
}

export default AddClimbCard