import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ClimbCard from './ClimbCard';

//Bootstrap
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';


const SessionCard = () => {
    const navigate = useNavigate()
    const { selectedLocation } = useSelector((store) => store.selectedLocation)
    const [startDate, setStartDate] = useState(new Date())
    //console.log(selectedLocation)

  return (
    <Container>
        <Col>
            <Row className='my-2'>
            Date: 
            </Row>

            <Row className='my-2'>
            Climbing location: {selectedLocation.location_name}
            <br />
            Number of climb: 
            </Row>

            <Row className='my-2'>
            <button className='my-2'
                onClick={() => navigate("/session/climb")}>Add Climb</button>
            <hr />
            </Row>

            <Row>
                <ClimbCard />

            </Row>           

        </Col>
    </Container>
  )
}

export default SessionCard