import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postClimb } from '../Redux/ClimbSlice';

//Bootstrap
import { Container, Row, Col, Card, Button, Dropdown, Form } from 'react-bootstrap';
import Type from './AddClimbComponents/Type';
import GradeBouldering from './AddClimbComponents/GradeBouldering';
import ClimbCompleted from './AddClimbComponents/ClimbCompleted';
import ClimbAttempt from './AddClimbComponents/ClimbAttempt';

const AddClimbCard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { selectedLocation } = useSelector((store) => store.selectedLocation)
    const { sessionList } = useSelector((store) => store.session)

    const [ route_name, setRoute_name] = useState("")
    const [ grade, setGrade ] = useState("")
    const [ description, setDescription ] = useState("")

    //console.log(selectedLocation)

    const location_id = selectedLocation.id
    const location_name = selectedLocation.location_name
    const session_id = sessionList.id
    //console.log(session_id)

    //const route_name = 'Dummy route'
    //const grade = "V5"
    const type = "Bouldering"
    //const description = "dummy description"
    

    const onClickButton = async event => {
        event.preventDefault()
        try {
            console.log("New climb added")
            //console.log(selectedLocation.id)
            //console.log(route_name)
            dispatch(postClimb(
                    {location_id, 
                    route_name, 
                    grade, 
                    type,
                    description,
                    sessionList}
                    ))
            navigate("/session")
        } catch (error) {
            
        }
    }
    
  return (
    <Container>
    <div>Add your climb...</div>
    <Button onClick={() => navigate("/session")}>back</Button>

    <Button onClick={onClickButton}>add</Button>

    <Col>

        {/* BASIC INFORMATION */}
        <Row className='my-2'>
        <Card>
            <Card.Body>
                <p>Bouldering at {/* Todo: Make dynamic. change type according to dropdown */}
                <br/>{location_name}</p>
            </Card.Body>
        </Card>
        </Row>

        {/* CLIMBING TYPE & GRADE*/}
        <Row className='my-2'>
        <Card>
            <Card.Body>
                <Col>
                    {/* CLIMBING TYPE */}
                    <Type />

                    {/* GRADE */}
                    <GradeBouldering />
                </Col>
            </Card.Body>
        </Card>
        </Row>

        
        <Row className='my-2'>
        <Card>
            <Card.Body>
                <form className='d-flex'>
                    <input type="text" placeholder='add route name' 
                        className='form-control' 
                        value={route_name}
                        onChange={event => setRoute_name(event.target.value)}
                        />
                </form>
            </Card.Body>
        </Card>
        </Row>


        {/* COMPLETED & NUMBER OF ATTEMPT */}
        <Row className='my-2'>
        <Card>
            <Card.Body>
               <ClimbCompleted />
                <ClimbAttempt />
            </Card.Body>
        </Card>
        </Row> 

        <Row className='my-2'>
        <Card>
            <Card.Body>
                <form className='d-flex'>
                    <input type="text" rows={3} placeholder='Notes' 
                        className='form-control' 
                        value={description}
                        onChange={event => setDescription(event.target.value)}
                        />
                </form>
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