import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ClimbCard from './ClimbCard';


//Bootstrap
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


const SessionCard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //const { selectedLocation } = useSelector((store) => store.selectedLocation)
    //const [startDate, setStartDate] = useState(new Date())
    const { selectedClimbList } = useSelector((store) => store.selectedSessionClimb)
    const { selectedSession } = useSelector((store) => store.selectedSession)
    //console.log(selectedClimbList)
    console.log(selectedSession)
    console.log("number of climb", selectedClimbList.length)


  return (
    <Container>
        <Col>
            <Row className='my-2'>
            Date: {selectedSession.date}
            </Row>

            <Row className='my-2'>
            
            Climbing location: {selectedSession.location_id}
            <br />
            Number of climb: {selectedClimbList.length}
            </Row>

            {/* TODO: Add more climb to existing session */}
            {/* <Row className='my-2'>
            <button className='my-2'
                onClick={() => navigate("/session/climb")}>Add Climb</button>
            <hr />
            </Row> */}

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