import React from 'react'
//
import ListSession from '../Components/ListSession'

//@MUI
import { Grid, Container, Typography, Button } from '@mui/material'

const Activity = () => {
  return (
    <Container maxWidth='xl'>

    <Grid item xs={12} sm={6} md={6}>
      <ListSession />
      TODO: List will be replaced by cards 
      TODO: Able to select activity by user/friend/everyone
    </Grid>

    </Container>
  )
}

export default Activity