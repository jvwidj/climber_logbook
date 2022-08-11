import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//@mui
import { Box, Stack, Link, Typography, Card, Grid } from "@mui/material";
//
import Iconify from "../../../Iconify";
import ClimbCard from "../../../ClimbCard";
import { alpha, styled } from "@mui/material/styles";

// ----------------------------------------------------------------------

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(1),
}));

// ----------------------------------------------------------------------

const SessionOverview = ({
  location,
  date,
  total_climb,
  color = "secondary",
  sx,
  ...other
}) => {
  //Date Format
  const dateFormat = new Date(date).toDateString();

  return (
    <Card
      sx={{
        py: 1,
        px: 1,
        boxShadow: 0,
        textAlign: "center",
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      {/* <IconWrapperStyle
        sx={{
          color: (theme) => theme.palette[color].dark,
          backgroundImage: (theme) =>
            `linear-gradient(135deg, ${alpha(
              theme.palette[color].dark,
              0
            )} 0%, ${alpha(theme.palette[color].dark, 0.24)} 100%)`,
        }}
      >
        <Iconify icon={icon} width={24} height={24} />
      </IconWrapperStyle> */}
      <Grid container spacing={2}></Grid>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Box>
          <Iconify
            size="xs"
            sx={{ color: "primary.dark", mx: 0 }}
            icon={"dashicons:arrow-left-alt2"}
            onClick={() => {}}
          />
        </Box>
        <Box sx={{ flexGrow: 2 }} />

        <Box sx={{ py: 1.5 }}>
          <Typography
            variant="subtitle3"
            sx={{ opacity: 0.3, fontSize: "0.75rem" }}
          >
            {dateFormat}
          </Typography>
          <Typography variant="h6">{`Climbing at ${location}`}</Typography>
          <Typography variant="h3">{``}</Typography>
          <Typography variant="subtitle2" sx={{ opacity: 0.3 }}>
            Total Climb: {total_climb}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 2 }} />
        <Box>
          <Iconify
            size="xs"
            sx={{ color: "primary.dark", mx: 0 }}
            icon={"dashicons:arrow-right-alt2"}
            onClick={() => {}}
          />
        </Box>
      </Stack>

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
    </Card>
  );
};

export default SessionOverview;
