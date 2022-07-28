import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//URL Data
const api = `${process.env.REACT_APP_BACKEND}/db/locations`

//Initial State
const initialState = {
    locationList: [],
    isLoading: true
}

/*************************** THUNKS ****************************** */

//Get location list
export const getLocationList = createAsyncThunk(
    'location',
    async () => {
        //const token = localStorage.getItem("TOKEN")

        try {
            const res = await axios.get(api)
                //console.log(res)
                return res.data
        } catch (err) {
            console.log("error", err)
        }
    }
)

/*************************** Export Slice & Reducers *********************************/
// Create location slice
export const locationSlice = createSlice({
    name:'location',
    initialState,
    reducers: {

    },
    extraReducers:{
        [getLocationList.pending]: (state) => {
            state.isLoading = true
        },
        [getLocationList.fulfilled]: (state, action) => {
            state.isLoading = false
            state.locationList = action.payload
        },
        [getLocationList.rejected]: (state) => {
            state.isLoading = false
        },
    }
})

//export slice
export default locationSlice.reducer;