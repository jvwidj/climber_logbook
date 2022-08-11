import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//@mui
import { Box, Stack, Link, Typography } from "@mui/material";
//
import Iconify from "../../../Iconify";
import ClimbCard from "../../../ClimbCard";

// -----------------------------------------------------------------------------

const SessionCard = (climb) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const { selectedLocation } = useSelector((store) => store.selectedLocation)
  //const [startDate, setStartDate] = useState(new Date())
  const { selectedClimbList } = useSelector(
    (store) => store.selectedSessionClimb
  );
  const { selectedSession } = useSelector((store) => store.selectedSession);
  //console.log(selectedClimbList)
  console.log(selectedSession);
  console.log("number of climb", selectedClimbList.length);

  const { route_name, grade, completed, attempt } = climb.climb;
  console.log(climb);
  console.log("is ccompleted???", completed, attempt);

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ minWidth: 140, flexGrow: 1 }}>
        <Link
          color="inherit"
          variant="subtitle2"
          underline="hover"
          onClick={() => {}}
        >
          {""}
        </Link>

        <Typography variant="body2" sx={{ color: "text.primary" }} noWrap>
          {grade} - {route_name}{" "}
          {completed ? (
            <Iconify
              size="xs"
              sx={{ color: "primary.dark", mx: 0 }}
              icon={"akar-icons:circle-check-fill"}
              onClick={() => {}}
            />
          ) : null}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "text.secondary", fontSize: "0.7rem" }}
          noWrap
        >
          {attempt} attempt
        </Typography>

        {/* <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
                            {dateFormat}
                    </Typography> */}
      </Box>

      <Box>
        <Iconify
          size="xs"
          sx={{ color: "text.secondary", mx: 0 }}
          icon={"akar-icons:heart"}
          onClick={() => {}}
        />
      </Box>

      <Box>
        <Iconify
          size="xs"
          sx={{ color: "text.secondary", mx: 0 }}
          icon={"eva:trash-fill"}
          onClick={() => {}}
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
  );
};

export default SessionCard;
