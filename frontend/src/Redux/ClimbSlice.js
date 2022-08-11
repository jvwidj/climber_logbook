import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//URL
const api = `${process.env.REACT_APP_BACKEND}/db`;

//Initial State
const initialState = {
  climbingList: [],
  isLoading: true,
};

/*************************** THUNKS ****************************** */

//Get climb list
export const getClimbList = createAsyncThunk("Climb/getAllClimb", async () => {
  //const token = localStorage.getItem("TOKEN")

  try {
    const res = await axios.get(`${api}/climbs`);
    //console.log("get climb list",res.data)
    return res.data;
  } catch (err) {
    console.log("error", err);
  }
});

//Post new climb
export const postClimb = createAsyncThunk(
  "climb/postClimb",
  async ({
    location_id,
    route_name,
    grade,
    type,
    description,
    sessionList,
    completed,
    attempt,
  }) => {
    try {
      // let id = session_id
      const res = await axios.post(`${api}/climbs`, {
        location_id: `${location_id}`,
        route_name: `${route_name}`,
        grade: `${grade}`,
        type: `${type}`,
        description: `${description}`,
        session_id: `${sessionList.id}`,
        completed: `${completed}`,
        attempt: `${attempt}`,
      });

      console.log(sessionList);
      return res.data;
    } catch (error) {
      console.log("Post Error", error);
    }
  }
);

/* export const postClimb = async ({
  location_id,
  route_name,
  grade,
  type,
  description,
  sessionList,
  completed,
  attempt,
}) => {
  try {
    // let id = session_id
    const res = await axios.post(`${api}/climbs`, {
      location_id: `${location_id}`,
      route_name: `${route_name}`,
      grade: `${grade}`,
      type: `${type}`,
      description: `${description}`,
      session_id: `${sessionList.id}`,
      completed: `${completed}`,
      attempt: `${attempt}`,
    });

    console.log(sessionList);
    return res.data;
  } catch (error) {
    console.log("Post Error", error);
  }
}; */

/*************************** Export Slice & Reducers *********************************/
//Climb slice

export const climbSlice = createSlice({
  name: "climb",
  initialState,
  reducers: {},
  extraReducers: {
    [getClimbList.pending]: (state) => {
      state.isLoading = true;
    },
    [getClimbList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.climbingList = action.payload;
    },
    [getClimbList.rejected]: (state) => {
      state.isLoading = false;
    },
    [postClimb.fulfilled]: (state, action) => {
      console.log("frontend", action.payload);
      state.isLoading = false;
      state.climbingList = action.payload;
    },
  },
});

//export slice
export default climbSlice.reducer;
