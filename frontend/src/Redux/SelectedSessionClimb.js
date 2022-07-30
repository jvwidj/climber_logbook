import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//URL Data
const api = `${process.env.REACT_APP_BACKEND}/api`

//Initial State
const initialState = {
    selectedClimbList: [],

}

/*************************** THUNKS ****************************** */
const token = localStorage.getItem("TOKEN")

export const getSelectedClimb = createAsyncThunk(
    'selectedClimb',
    async (id) => {
        try {
            const res = 
            await axios.get(
                `${api}/session/${id}`,
                {headers: {Authorization: `Bearer ${token}`}}
            )
            return res.data
        } catch (error) {
            
        }
    }
)

export const selectedSessionClimb = createSlice({
    name: 'selectedSessionClimb',
    initialState,
    extraReducers: {
        [getSelectedClimb.fulfilled]: (state, action) => {
            state.selectedClimbList = action.payload
        },
    }
})

//export slice
export default selectedSessionClimb.reducer;