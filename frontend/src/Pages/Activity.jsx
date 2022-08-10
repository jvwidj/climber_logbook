import React, { useState, SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// material
import {
  Grid,
  Button,
  Container,
  Stack,
  Typography,
  Box,
  Divider,
  Card,
  CardHeader,
  Pagination,
  Tabs,
  Tab,
} from "@mui/material";
import { TabPanel, TabList, TabContext } from "@mui/lab";
//
import Iconify from "../Components/Iconify";
import Page from "../Components/mui/Page";
import Scrollbar from "../Components/mui/Scrollbar";
import SessionItem from "../Components/sections/@dashboard/app/SessionItem";
//
import ListSession from "../Components/ListSession";
import { addSelectedSession } from "../Redux/SelectedSession";
import { postSession } from "../Redux/SessionSlice";
import ActivityPostCard from "../Components/sections/@dashboard/activity/ActivityPostCard";
import AppRecentActivity from "../Components/sections/@dashboard/app/AppRecentActivity";
//
import MOCK from "../_mock/session";

// ----------------------------------------------------------------------
const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
  { value: "popular", label: "Popular" },
];

// ----------------------------------------------------------------------

const Activity = () => {
  const { userData } = useSelector((store) => store.auth);
  const { sessionList } = useSelector((store) => store.session);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  //console.log(sessionList)

  const onClickButton = async (event) => {
    event.preventDefault();
    try {
      const user_id = userData[0].id;
      dispatch(postSession(user_id)).then((data) => {
        //console.log(data.payload)
        dispatch(addSelectedSession(data.payload));
        //console.log(selectedSession)
      });
      navigate("/location");
    } catch (error) {}
  };

  const findUser = async (event) => {
    event.preventDefault();
    try {
      navigate("/friend");
    } catch (error) {}
  };

  const [tabNum, setTabNum] = useState("1");

  //Handle typed input value
  function handleChange(event, val) {
    setTabNum(val);
    console.log(val);
  }

  return (
    <Page title="Dashboard: Page">
      <Container maxWidth="xl">
        <TabContext value={tabNum}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} centered>
              <Tab label="User" value="1" />
              <Tab label="Friends" value="2" />
              <Tab label="Everyone" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={3}
              mt={3}
            >
              <Typography variant="h4" gutterBottom>
                User Activity
              </Typography>
              <Button
                variant="contained"
                onClick={onClickButton}
                startIcon={<Iconify icon="eva:plus-fill" />}
              >
                New Session
              </Button>
            </Stack>

            <Card>
              <CardHeader title={"Recent Activity"} subheader={""} />
              <Scrollbar>
                <Stack spacing={2} sx={{ p: 2, pr: 0 }}>
                  {sessionList.slice(0, 5).map((session) => (
                    <SessionItem key={session.id} session={session} />
                  ))}
                </Stack>
              </Scrollbar>

              <Divider />

              <Box sx={{ p: 2, textAlign: "right" }}>
                {/* <Button 
                        size="small" 
                        color="inherit" 
                        endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}
                        //onClick= {onClickButton}
                        >
                    Pagination
                    </Button> */}
                <Pagination count={4} />
              </Box>
            </Card>
          </TabPanel>

          <TabPanel value="2">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              mb={3}
              mt={3}
            >
              <Typography variant="h4" gutterBottom>
                Friends
              </Typography>
              <Button
                variant="contained"
                onClick={findUser}
                startIcon={<Iconify icon="la:user-friends" />}
              >
                Following
              </Button>
            </Stack>

            <Card>
              <CardHeader title={"Recent Activity"} subheader={""} />
              <Scrollbar>
                <Stack spacing={2} sx={{ p: 2, pr: 0 }}>
                  {sessionList.slice(0, 5).map((session) => (
                    <SessionItem key={session.id} session={session} />
                  ))}
                </Stack>
              </Scrollbar>

              <Divider />

              <Box sx={{ p: 2, textAlign: "right" }}>
                {/* <Button 
                        size="small" 
                        color="inherit" 
                        endIcon={<Iconify icon={'eva:arrow-ios-forward-fill'} />}
                        //onClick= {onClickButton}
                        >
                    Pagination
                    </Button> */}
                <Pagination count={4} />
              </Box>
            </Card>
          </TabPanel>

          <TabPanel value="3">Everyone</TabPanel>
        </TabContext>

        {/* <Grid container spacing={3}>
                    {sessionList.map(session => (
                        <ActivityPostCard key={session.id} post={session}/>
                    ))}
                </Grid>
                
                <Grid item xs={12} sm={6} md={6}>
                <ListSession />
                TODO: List will be replaced by cards 
                TODO: Able to select activity by user/friend/everyone
                </Grid> */}
      </Container>
    </Page>
  );
};

export default Activity;
