import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//SIGNUP THUNK
export const signupThunk =
  ({ username, email, password }) =>
  async () => {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND}/auth/signup`,
      {
        username,
        email,
        password,
      }
    );
    console.log("response", res);
  };

//LOGIN THUNK
export const loginThunk =
  ({ username, password }) =>
  async (dispatch) => {
    const res = await axios.post(
      `${process.env.REACT_APP_BACKEND}/auth/login`,
      {
        username,
        password,
      }
    );
    console.log("response", res);

    if (res.data) {
      localStorage.setItem("TOKEN", res.data.token);
      dispatch(login());
    }
  };

//LOGOUT THUNK
export const logoutThunk = () => (dispatch) => {
  localStorage.removeItem("TOKEN");
  dispatch(logout());
};

//Get user THUNK
export const getUserData = createAsyncThunk("userData", async () => {
  const token = localStorage.getItem("TOKEN");
  try {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND}/auth/users`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    console.log("error", error);
  }
});

const authSlice = createSlice({
  name: "Auth",
  initialState: {
    isAuthenticated: false || localStorage.getItem("TOKEN") != null,
    userData: [],
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
  extraReducers: {
    [getUserData.fulfilled]: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
