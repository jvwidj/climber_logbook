import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//URL
const api = `${process.env.REACT_APP_BACKEND}`;

//initial state
const initialState = {
  friendList: [],
  isLoading: true,
};

const token = localStorage.getItem("TOKEN");

//Get Friend list
export const getFriendList = createAsyncThunk(
  "social/getFriendList",
  async (id) => {
    try {
      const res = await axios.get(`${api}/social/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

//remove friend
export const removeFriend = createAsyncThunk(
  "social/removeFriend",
  async (id) => {
    try {
      console.log(id);
      await axios.delete(`${api}/social/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      //console.log(user_a, user_b);
      console.log("unfollow");
      //return res.data;
    } catch (error) {
      console.log("unfollow error", error);
    }
  }
);

/*************************** Export Slice & Reducers *********************************/
export const friendSlice = createSlice({
  name: "friend",
  initialState,
  reducers: {},
  extraReducers: {
    [getFriendList.pending]: (state) => {
      state.isLoading = true;
    },
    [getFriendList.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log("friend listtt", action.payload);
      state.friendList = action.payload;
    },
    [getFriendList.rejected]: (state) => {
      state.isLoading = false;
    },
    [removeFriend.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
  },
});

//export slice
export default friendSlice.reducer;
