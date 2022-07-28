import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { addLocationData } from '../Redux/SelectedLoc';

const ListLocation = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { locationList } = useSelector((store) => store.location)
    //console.log( locationList )

    //Seach state
    const [search, setSearch] = useState("")

    //Search bar function
    function filterLoc() {
        return locationList
                      .filter((val) => {
                        if (search === "") {
                          return val;
                        } else if (
                          val.location_name
                            .toLowerCase()
                            .includes(search.toLocaleLowerCase())
                        ) {
                          return val;
                        }
                      })
      }


  return (
    <div className=''>
    <Container fluid className='d-flex justify-content-center'>
    <Row>

    {/* Search Bar */}
    <Col className='search my-3'>
        <input
            type='text'
            placeholder='search location...'
            onChange={(event) =>{
                setSearch(event.target.value)
            }}></input>
    </Col>

    <Col>
    <h3>Outdoor</h3>       
    <Card className="mt-2" style={{ width: '18rem' }}>
        {
        filterLoc()
        .map(location => (
            location.is_outdoor ? 
            
            <ListGroup variant="flush" key={location.id}>
                <ListGroup.Item 
                    onClick={() => navigate("/location/route")}
                    >
                    {location.location_name}
                    </ListGroup.Item>
                </ListGroup> 
            
            : null
        ))}       
        </Card>
    </Col>


    <Col>
        <h3>Indoor</h3>
        <Card className="mt-2" style={{ width: '18rem' }}>
        {
        filterLoc()
        .map(location => (
            location.is_outdoor ? 
            null:
            <ListGroup variant="flush" key={location.id}>
                <ListGroup.Item 
                    onClick={() => {
                        dispatch(addLocationData(location.location_name))
                        navigate("/session")
                        }}
                    >{location.location_name}</ListGroup.Item>
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