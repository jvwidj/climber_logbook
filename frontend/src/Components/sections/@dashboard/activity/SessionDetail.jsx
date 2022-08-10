import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//@mui
import { Box, Stack, Link, Typography } from '@mui/material'
//
import Iconify from '../../../Iconify';
import ClimbCard from '../../../ClimbCard';

//Bootstrap
// -----------------------------------------------------------------------------



const SessionCard = (climb) => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    //const { selectedLocation } = useSelector((store) => store.selectedLocation)
    //const [startDate, setStartDate] = useState(new Date())
    const { selectedClimbList } = useSelector((store) => store.selectedSessionClimb)
    const { selectedSession } = useSelector((store) => store.selectedSession)
    //console.log(selectedClimbList)
    console.log(selectedSession)
    console.log("number of climb", selectedClimbList.length)
    

    
    //Date Format
    const dateFormat = new Date(selectedSession.date).toDateString()

    const { route_name, grade, } = climb.climb
    console.log(climb)

  return (

    <Stack direction="row" alignItems="center" spacing={2}>
        <Box sx={{ minWidth: 140, flexGrow:1 }}>
                    <Link 
                        color="inherit" 
                        variant='subtitle2' 
                        underline='hover'
                        onClick={() => {
                        
                        }} >
                        {""}
                    </Link>

                    <Typography variant="body2" sx={{ color: 'text.primary' }} noWrap>
                            {grade}
                    </Typography>
                    
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                            {route_name}
                    </Typography>
    
                    {/* <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                            {dateFormat}
                    </Typography> */}
                </Box>

                <Box>
                    <Iconify 
                        size="xs" 
                        sx={{ color: 'text.secondary', mx:0}} 
                        icon={'akar-icons:heart'} 
                        onClick={() => {} }
                        />
                </Box>

                <Box>
                    <Iconify 
                        size="xs" 
                        sx={{ color: 'text.secondary', mx:2}} 
                        icon={'eva:trash-fill'} 
                        onClick={() => {} }
                        />
                </Box>
    

                {/* <Container>
                    <Col>
                        <Row className='my-2'>
                        Date: {dateFormat}
                        </Row>
                
                        <Row className='my-2'>
                        
                        Climbing location: {selectedSession.location_name}
                        <br />
                        Number of climb: {selectedClimbList.length}
                        </Row>
                
                
                        <Row>
                            {selectedClimbList.map(climb => (
                                <ClimbCard key={climb.id} {...climb}/>
                            ))}
                        </Row>           
                
                    </Col>
                </Container> */}
    
    </Stack>


  )
}

export default SessionCard