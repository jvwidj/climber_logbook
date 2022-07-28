import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

//URL Data
const api = `${process.env.REACT_APP_BACKEND}/api/sessions`

//Initial State
const initialState = {
    sessionList: [],
    isLoading: true
}

/*************************** THUNKS ****************************** */

//Get Session list
//Create async Thunk
export const getSessionList = createAsyncThunk(
    'session/getSessionList',
    async () => {
        const token = localStorage.getItem("TOKEN")
        //console.log(token)
        try {
            const res = 
                await axios.get(
                    api,
                    {headers: {Authorization: `Bearer ${token}`}
                    })
                    //console.log("res", res.data)
                    return res.data;
        } catch (error) {
            console.log("error", error);
        }
    }
)

/*************************** Export Slice & Reducers *********************************/
// Create session slice
export const sessionSlice = createSlice({
    name:'session',
    initialState,
    reducers: {

    },
    extraReducers:{ // extra reducers for thunks
        [getSessionList.pending]: (state) => {
            state.isLoading = true
        },
        [getSessionList.fulfilled]: (state, action) => {
            state.isLoading = false
            state.sessionList = action.payload
        },
        [getSessionList.rejected]: (state) => {
            state.isLoading = false
        },

    }
})

// export slice
export default sessionSlice.reducer;
