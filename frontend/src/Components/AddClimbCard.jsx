import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postClimb } from '../Redux/ClimbSlice';

//Bootstrap
import { Container, Row, Col, Card, Button, Dropdown } from 'react-bootstrap';

const AddClimbCard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { selectedLocation } = useSelector((store) => store.selectedLocation)
    const { sessionList } = useSelector((store) => store.session)

    //console.log(selectedLocation)

    const location_id = selectedLocation.id
    const location_name = selectedLocation.location_name
    const session_id = sessionList.id
    console.log(session_id)

    const route_name = 'Dummy route'
    const grade = "V5"
    const type = "Bouldering"
    const description = "dummy description"
    

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
        <Row className='my-2'>
        <Card>
            <Card.Body>
                <p>Bouldering at {/* Todo: Make dynamic. change type according to dropdown */}
                <br/>{location_name}</p>
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
                            <Dropdown.Item href="#/action-1" value=''>Bouldering</Dropdown.Item>
                            <Dropdown.Item href="#/action-2" value=''>Sport</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" value=''>Trad</Dropdown.Item>
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