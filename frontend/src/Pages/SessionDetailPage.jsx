import React from 'react'
// @mui
import { Stack, Box, Typography, Grid } from '@mui/material'


import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ActivityPostCard } from '../Components/sections/@dashboard/activity';
import AppActivityDetail from '../Components/sections/@dashboard/activity/AppActivityDetail';

const SessionDetailPage = () => {
  const navigate = useNavigate()
  return (
    <Stack direction="column" alignItems="center" spacing={2} >

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Button onClick={() => navigate("/dashboard/activity")}>back</Button>
          <Button onClick={() => navigate("/dashboard")}>finish</Button>
        </Grid>
        

        <Grid item xs={12} sm={6} md={3}>
        <AppActivityDetail />
        </Grid>

      </Grid>
    </Stack>

  )
}

export default SessionDetailPage