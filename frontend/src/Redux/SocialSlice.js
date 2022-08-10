import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//URL
const api = `${process.env.REACT_APP_BACKEND}`;

//initial state
const initialState = {
  userList: [],
  isLoading: true,
};

const token = localStorage.getItem("TOKEN");

//Get all user list
export const getUserList = createAsyncThunk("social/getAllUser", async () => {
  try {
    const res = await axios.get(`${api}/auth/all`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    //console.log(res.data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
});

//Add new friend/connection
export const addFriend = createAsyncThunk("social/addFriend", async (id) => {
  try {
    const res = await axios.post(
      `${api}/social`,
      { person_id: id },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  } catch (error) {
    console.log("Add Friend error", error);
  }
});

/*************************** Export Slice & Reducers *********************************/
export const socialSlice = createSlice({
  name: "social",
  initialState,
  reducers: {},
  extraReducers: {
    [getUserList.pending]: (state) => {
      state.isLoading = true;
    },
    [getUserList.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userList = action.payload;
    },
    [getUserList.rejected]: (state) => {
      state.isLoading = false;
    },
    [addFriend.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.userList = action.payload;
    },
  },
});

//export slice
export default socialSlice.reducer;
