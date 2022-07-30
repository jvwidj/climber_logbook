import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import sessionReducer from "./SessionSlice";

//URL
const api = `${process.env.REACT_APP_BACKEND}/db`



//Initial State
const initialState = {
    climbingList: [],
    isLoading: true
}

/*************************** THUNKS ****************************** */

//Get climb list
export const getClimbList = createAsyncThunk(
    'Climb/getAllClimb',
    async () => {
        //const token = localStorage.getItem("TOKEN")

        try {
            const res = await axios.get(`${api}/climbs`)
                //console.log(res)
                return res.data
        } catch (err) {
            console.log("error", err)
        }
    }
)

//Post new climb
export const postClimb = createAsyncThunk(
    'climb/postClimb',
    async ({location_id, route_name, grade, type, description, sessionList}) => {
        try {
            const res = await axios.post(
                `${api}/climbs`,
                {
                    location_id: `${location_id}`,
                    route_name: `${route_name}`,
                    grade: `${grade}`,
                    type: `${type}`,
                    description: `${description}`,
                    session_id: `${sessionList.id}`
                }
                )
            //console.log(res.data)
            console.log(sessionList)
            return res.data
        } catch (error) {
            console.log("Post Error", error)
        }
    }
)

/*************************** Export Slice & Reducers *********************************/
//Climb slice

export const climbSlice = createSlice({
    name: 'climb',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getClimbList.pending]: (state) => {
            state.isLoading = true
        },
        [getClimbList.fulfilled]: (state, action) => {
            state.isLoading = false
            state.climbingList = action.payload
        },
        [getClimbList.rejected]: (state) => {
            state.isLoading = false
        },
        [postClimb.fulfilled]: (state, action) => {
            state.isLoading = false
            state.climbingList = action.payload
        },

    }
})

//export slice
export default climbSlice.reducer