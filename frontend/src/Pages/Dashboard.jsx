import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddSession from "../Components/AddSession";
import ListSession from "../Components/ListSession";
import PerformanceDash from "../Components/PerformanceDash";
import { getUserData, logoutThunk } from "../Redux/authSlice";
import { getSessionList } from "../Redux/SessionSlice";

//@MUI
import { useTheme } from "@mui/material/styles";
import { Grid, Container, Typography, Button } from "@mui/material";
// mocks_
import account from "../_mock/account";

//sections
import AppWidgetSummary from "../Components/sections/@dashboard/app/AppWidgetSummary";
import Page from "../Components/mui/Page";
import AppRecentActivity from "../Components/sections/@dashboard/app/AppRecentActivity";
import AppClimbDistribution from "../Components/sections/@dashboard/app/AppClimbDistribution";
import AppSessionCountChart from "../Components/sections/@dashboard/app/AppSessionCountChart";
import { getClimbList } from "../Redux/ClimbSlice";
import CalcBoulderingGrade from "../Components/Performance/CalcBoulderingGrade";
import { configureStore } from "@reduxjs/toolkit";

//data

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData());
    dispatch(getSessionList());
    dispatch(getClimbList());
  }, []);

  const theme = useTheme();

  const { isLoading } = useSelector((store) => store.session);

  //data
  const { sessionList } = useSelector((store) => store.session);
  const { climbingList } = useSelector((store) => store.climb);
  const { userData } = useSelector((store) => store.auth);
  console.log(userData[0]);

  //const fname = userData[0].fname;

  if (isLoading) {
    return (
      <div className="loading text-center my-5">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <Page title="Dashboard">
      <CalcBoulderingGrade />

      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <Typography variant="h4" sx={{ mb: 3 }}>
          {`Hi, Welcome ${userData[0].fname && userData[0].fname}`}
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4}>
            <AppClimbDistribution
              title="Climbing Distribution"
              chartData={[
                { label: "Bouldering", value: 52 },
                { label: "Sport Climb", value: 26 },
                { label: "Trad", value: 15 },
              ]}
              chartColors={[
                theme.palette.chart.blue[1],
                theme.palette.chart.red[1],
                theme.palette.chart.green[1],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppSessionCountChart
              title="Session Count"
              chartLabels={[
                "01/01/2022",
                "02/01/2022",
                "03/01/2022",
                "04/01/2022",
                "05/01/2022",
                "06/01/2022",
                "07/01/2022",
                "08/01/2022",
                "09/01/2022",
                "10/01/2022",
                "11/01/2022",
                "12/01/2022",
              ]}
              chartData={[
                {
                  name: "Session",
                  type: "area",
                  fill: "gradient",
                  data: [20, 4, 24, 31, 15, 5, 6, 3, 19, 20, 21, 23],
                },
              ]}
            />
          </Grid>

          {/* <Grid item xs={12} md={12} lg={12}>
      <PerformanceDash />
    </Grid> */}

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Session Count"
              total={sessionList.length}
              color="primary"
              icon={"ant-design:rocket-filled"}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary
              title="Average Grade"
              total={"V6"}
              color="secondary"
              icon={"ant-design:profile-filled"}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={3}>
            <AppRecentActivity />
          </Grid>

          {/* <Grid item xs={12} sm={6} md={6}>
      <ListSession />
      TODO: only show 3-5 latest session
    </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
