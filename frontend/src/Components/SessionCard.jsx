import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

//DatePicker
import DatePicker from "react-datepicker";
// import required react-datepicker styling file
import "react-datepicker/dist/react-datepicker.css";

//Bootstrap
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const SessionCard = () => {
    const navigate = useNavigate()
    const { selectedLocation } = useSelector((store) => store.selectedLocation)
    const [startDate, setStartDate] = useState(new Date())

  return (
    <Container>
        <Col>
            <Row className='my-2'>
            Date: 
            <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                />
            </Row>

            <Row className='my-2'>
            Climbing location: {selectedLocation}
            <br />
            Number of climb: 
            </Row>

            <Row className='my-2'>
            <button className='my-2'
                onClick={() => navigate("/session/climb")}>Add Climb</button>
            <hr />
            </Row>

            <Row>
            <Card className='my-2'>
            <Card.Header as="h5">Climb 1</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

            <Card className='my-2'>
            <Card.Header as="h5">Climb 2</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>

            <Card className='my-2'>
            <Card.Header as="h5">Climb 3</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </Row>           

        </Col>
    </Container>
  )
}

export default SessionCard