import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postClimb } from '../Redux/ClimbSlice';

//Bootstrap
import { Container, Row, Col, Card, Button} from 'react-bootstrap';

//Child Components
import Type from './AddClimbComponents/Type';
import GradeBouldering from './AddClimbComponents/GradeBouldering';
import GradeSport from './AddClimbComponents/GradeSport'
import GradeTrad from './AddClimbComponents/GradeTrad';
import ClimbCompleted from './AddClimbComponents/ClimbCompleted';
import ClimbAttempt from './AddClimbComponents/ClimbAttempt';
import { getSelectedClimb } from '../Redux/SelectedSessionClimb';

const AddClimbCard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { selectedLocation } = useSelector((store) => store.selectedLocation)
    const { sessionList } = useSelector((store) => store.session)
    const { selectedSession } = useSelector((store) => store.selectedSession)

    const [ route_name, setRoute_name] = useState("")
    const [ grade, setGrade ] = useState("")
    const [ description, setDescription ] = useState("")
    const [ type, setType ] = useState("Bouldering")
    const [ completed, setCompleted ]= useState(false)
    const [ attempt, setAttempt ] = useState("1")

    //console.log(selectedLocation)

    const location_id = selectedLocation.id
    const location_name = selectedLocation.location_name
    const session_id = selectedSession.id
    //console.log(selectedSession)


    console.log("climbing category", type, grade)
    console.log("completed?", completed, "attempt", attempt)

    const onClickButton = async event => {
        event.preventDefault()
        try {
            console.log("New climb added")
            //Post new session climb
            dispatch(postClimb(
                {location_id, 
                    route_name, 
                    grade, 
                    type,
                    description,
                    sessionList,
                    completed,
                    attempt
                }
                ))
                
            //get selected climb
            //TODO: fix bug. first item does not appear
            await dispatch(getSelectedClimb(session_id))
            console.log("get selected climb", session_id)
            navigate("/session")

        } catch (error) {
            console.log("error", error)
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
                <p>{grade} {type} at {/* Todo: Make dynamic. change type according to dropdown */}
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
                    <Type sendValue={(value) => setType(value)}/>

                    {/* GRADE */}
                    {type === "Bouldering" ? <GradeBouldering sendValue={(value) => setGrade(value)}/> 
                        : type ==="Sport" ? <GradeSport sendValue={(value) => setGrade(value)}/> 
                        : <GradeTrad sendValue={(value) => setGrade(value)}/>}
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
               <ClimbCompleted sendValue={(value) => setCompleted(value)}/>
                <ClimbAttempt sendValue={(value) => setAttempt(value)}/>
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