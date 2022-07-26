import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
    name: "Auth", 
    initialState: {
        isAuthenticated: false || localStorage.getItem("TOKEN") != null,
    },
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
    },
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

//SIGNUP THUNK
export const signupThunk = 
    ({username, email, password}) => 
    async () =>{
        const res = await axios.post(`${process.env.REACT_APP_BACKEND}/auth/signup`, {
            username,
            email,
            password
        });
        console.log("response", res)
    }


//LOGIN THUNK
export const loginThunk = 
    ({username, password}) => 
    async (dispatch) => {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND}/auth/login`,
            {
            username,
            password,
            });
        console.log("response", res);

        if(res.data){
            localStorage.setItem("TOKEN", res.data.token);
            dispatch(login());
        }
    }

//LOGOUT THUNK
export const logoutThunk = () => (dispatch) => {
    localStorage.removeItem("TOKEN");
    dispatch(logout());
}

