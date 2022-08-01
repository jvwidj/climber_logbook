import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ClimbCard from './ClimbCard';


//DatePicker
import DatePicker from "react-datepicker";
// import required react-datepicker styling file
import "react-datepicker/dist/react-datepicker.css";

//Bootstrap
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


const SessionCard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { selectedLocation } = useSelector((store) => store.selectedLocation)
    const [date, setDate] = useState(new Date())
    const { selectedClimbList } = useSelector((store) => store.selectedSessionClimb)

  return (
    <Container>
        <Col>
            <Row className='my-2'>
            Date: 
            <DatePicker
                    dateFormat="dd/MM/yyyy"
                    selected={date}
                    onChange={event => setDate(event)}
                />
            </Row>

            <Row className='my-2'>
            Climbing location: {selectedLocation.location_name}
            <br />
            Number of climb: 
            </Row>

            <Row className='my-2'>
            <button className='my-2'
                onClick={() => {
                    navigate("/session/climb")}}>Add Climb</button>
            <hr />
            </Row>

            <Row>
            {selectedClimbList.map(climb => (
                    <ClimbCard key={climb.id} {...climb}/>
                ))}
            </Row>           

        </Col>
    </Container>
  )
}

export default SessionCard