import React from "react";
//@mui
import {
  Box,
  Stack,
  Card,
  Button,
  Divider,
  CardHeader,
  Container,
  Typography,
  Grid,
} from "@mui/material";
//
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// components
import Iconify from "../../../Iconify";
import Scrollbar from "../../../mui/Scrollbar";
//
import SessionDetail from "./SessionDetail";
import Page from "../../../mui/Page";
import SessionOverview from "./SessionOverview";
import ActivityPostCard from "./ActivityPostCard";

// ----------------------------------------------------------------------

export default function AppActivityDetail({ sx, ...other }) {
  const { selectedClimbList } = useSelector(
    (store) => store.selectedSessionClimb
  );
  const { selectedSession } = useSelector((store) => store.selectedSession);

  return (
    <Page title="Session Detail">
      <Container maxWidth="xl" sx={{ pb: 10 }}>
        <Typography variant="h4" sx={{ mb: 1 }}>
          {/* {`Hi, Welcome ${userData[0] && userData[0].fname}`} */}
          {/* {`Session at ...`} */}
        </Typography>

        <Grid container spacing={1}>
          {/* Session Overview */}
          <Grid item xs={12} md={6} lg={4}>
            <SessionOverview
              location={selectedSession.location_name}
              date={selectedSession.date}
              total_climb={selectedClimbList.length}
            />
          </Grid>
          {/* Climbing list */}
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardHeader title={"Route List"} />

              <Stack spacing={0.5} sx={{ p: 1, px: 2 }}>
                {selectedClimbList.slice(0, 5).map((climb) => (
                  <SessionDetail key={climb.id} climb={climb} />
                ))}
              </Stack>
            </Card>
          </Grid>

          <ActivityPostCard post={selectedClimbList[0]} />
        </Grid>
      </Container>
    </Page>
  );
}
