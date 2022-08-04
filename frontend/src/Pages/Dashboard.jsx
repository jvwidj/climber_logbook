import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import AddSession from '../Components/AddSession'
import ListSession from '../Components/ListSession'
import PerformanceDash from '../Components/PerformanceDash'
import { getUserData, logoutThunk } from '../Redux/authSlice'
import { getSessionList } from '../Redux/SessionSlice'

//@MUI
import { useTheme } from '@mui/material/styles'
import { Grid, Container, Typography, Button } from '@mui/material';
// mocks_
import account from '../_mock/account';

//sections
import AppWidgetSummary from '../Components/sections/@dashboard/app/AppWidgetSummary'

const Dashboard = () => {
  const theme = useTheme();

  const { isLoading } = useSelector((store) => store.session);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSessionList())
  }, [dispatch])

  useEffect(() => {
    dispatch(getUserData())
  }, [dispatch])

  if(isLoading){
    return (
      <div className="loading text-center my-5">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <Container maxWidth='xl'> 
    

    <Typography variant="h4" sx={{ mb: 5 }}>
          {`Hi, Welcome ${account.fname}`}
    </Typography>
    
    {/* <Button onClick={() => {dispatch(logoutThunk())}}>Logout</Button> */}
    

    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <AppWidgetSummary title="Session Count" total={35} color="primary" icon={'ant-design:rocket-filled'}/>
      </Grid>

    <Grid item xs={12} sm={6} md={3}>
      <AppWidgetSummary title="Average Grade" total={"V6"} color="secondary" icon={'ant-design:profile-filled'}/>
    </Grid>

    <Grid item xs={12} md={12} lg={12}>
      <PerformanceDash />
    </Grid>

    <Grid item xs={12} sm={6} md={6}>
      <ListSession />
      TODO: only show 3-5 latest session
    </Grid>
    




    
    </Grid>
    </Container>
  )
}

export default Dashboard