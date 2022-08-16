import React from "react";
//@mui
import { Box, Stack, Link, Typography } from "@mui/material";
//
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// components
import Iconify from "../../../Components/Iconify";
//_mock
import friend from "../../../../src/_mock/friend";
//
import { addSelectedSession } from "../../../Redux/SelectedSession";
import { getSelectedClimb } from "../../../Redux/SelectedSessionClimb";
import { deleteBySession } from "../../../Redux/SessionClimbSlice";
import { deleteSession, getSessionList } from "../../../Redux/SessionSlice";

// -----------------------------------------------------------------------------

function FriendSessionItem(session) {
  const { location_name, date, user_id } = session.session;
  const { photoURL } = friend;
  //
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Delete button
  async function deleteSessionButton(id) {
    try {
      //TODO: need to dispatch(deleteSessionClimb) to avoid error
      dispatch(deleteBySession(id)).then(() => {
        dispatch(deleteSession(id)).then(() => {
          dispatch(getSessionList());
        });
      });
    } catch (error) {
      console.log(error);
    }
  }

  //Detail Link
  async function detailLink(id) {
    try {
      dispatch(getSelectedClimb(id)).then(() => {
        navigate("/session_detail");
      });
    } catch (error) {
      console.log(error);
    }
  }

  //Date Format
  const dateFormat = new Date(date).toDateString();

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={user_id}
        src={photoURL}
        sx={{ width: 36, height: 36, borderRadius: 1.5, flexShrink: 0 }}
      />

      <Box sx={{ minWidth: 140, flexGrow: 1 }}>
        <Link
          color="inherit"
          variant="subtitle2"
          underline="hover"
          onClick={() => {
            dispatch(addSelectedSession(session.session));
            dispatch(detailLink(session.session.id));
          }}
        >
          {user_id} {`at ${location_name}`}
        </Link>

        <Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
          {dateFormat}
        </Typography>
      </Box>
    </Stack>
  );
}

export default FriendSessionItem;
