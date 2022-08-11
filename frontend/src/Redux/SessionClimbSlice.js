import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//URL Data
const api = `${process.env.REACT_APP_BACKEND}/api`;

//initial State
const initialState = {
  sessionClimbList: [],
  isLoading: true,
};

/*************************** THUNKS ****************************** */
const token = localStorage.getItem("TOKEN");

//Get Session climb list
export const getSessionClimbList = createAsyncThunk(
  "sessionClimb/getSessionClimbList",
  async () => {
    try {
      const res = await axios.get(`${api}/climbs`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("card", res.data);
      return res.data;
    } catch (error) {
      console.log("get session climb error", error);
    }
  }
);

//Delete all climb from a session
export const deleteBySession = createAsyncThunk(
  "sessionClimb/deleteSessionClimb",
  async (session_id) => {
    try {
      const res = await axios.delete(`${api}/climb/session/${session_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("all climb from the session is deleted");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
);

/*************************** Export Slice & Reducers *********************************/

export const sessionClimbSlice = createSlice({
  name: "sessionClimb",
  initialState,
  reducers: {},
  extraReducers: {
    [getSessionClimbList.pending]: (state) => {
      state.isLoading = true;
    },
    [getSessionClimbList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.sessionClimbList = action.payload;
    },
    [getSessionClimbList.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

//export slice
export default sessionClimbSlice.reducer;
