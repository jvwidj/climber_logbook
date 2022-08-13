import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//URL Data
const api = `${process.env.REACT_APP_BACKEND}/api/sessions`;
const api2 = `${process.env.REACT_APP_BACKEND}/api`;

//Initial State
const initialState = {
  sessionList: [],
  userSessionList: [],
  isLoading: true,
};

/*************************** THUNKS ****************************** */

//Get Session list
//Create async Thunk
export const getSessionList = createAsyncThunk(
  "session/getSessionList",
  async () => {
    const token = localStorage.getItem("TOKEN");
    //console.log(token)
    try {
      const res = await axios.get(api, {
        headers: { Authorization: `Bearer ${token}` },
      });
      //console.log("res", res.data)
      return res.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

//Get session by user
export const getSessionByUserList = createAsyncThunk(
  "session/getSessionByUserList",
  async (user_id) => {
    try {
      const res = await axios.get(`${api2}/session/user/${user_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);

const token = localStorage.getItem("TOKEN");

//Post new session
export const postSession = createAsyncThunk(
  "session/postSession",
  async (user_id) => {
    //console.log(token)
    try {
      const res = await axios.post(
        api,
        { user_id: `${user_id}` },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      console.log(res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

//Update session
export const updateSession = createAsyncThunk(
  "session/updateSession",
  async ({ session_id, location_id, date }) => {
    try {
      //console.log(session_id, location_id)
      const res = await axios.put(
        `${api2}/session/${session_id}`,
        {
          location_id: `${location_id}`,
          date: `${date}`,
          start_time: "00:00:00",
          end_time: "00:00:00",
          is_private: "false",
        },
        { headers: { Authentication: `Bearer ${token}` } }
      );
      return res.data;
    } catch (error) {
      console.log("update error", error);
    }
  }
);

//Delete session
export const deleteSession = createAsyncThunk(
  "session/deleteSession",
  async (id) => {
    try {
      const res = await axios.delete(`${api2}/session/${id}`, {
        headers: { Authentication: `Bearer ${token}` },
      });
      console.log("session deleted", id);
      //return res.data
    } catch (error) {
      console.log(error);
    }
  }
);

/*************************** Export Slice & Reducers *********************************/
// Create session slice
export const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {},
  extraReducers: {
    // extra reducers for thunks
    [getSessionList.pending]: (state) => {
      state.isLoading = true;
    },
    [getSessionList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.sessionList = action.payload;
    },
    [getSessionList.rejected]: (state) => {
      state.isLoading = false;
    },
    [postSession.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.sessionList = action.payload;
    },
    [deleteSession.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [updateSession.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [getSessionByUserList.pending]: (state) => {
      state.isLoading = true;
    },
    [getSessionByUserList.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("testing", action.payload);
      state.userSessionList = action.payload;
    },
    [getSessionByUserList.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// export slice
export default sessionSlice.reducer;
