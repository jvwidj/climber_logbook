import { createSlice } from "@reduxjs/toolkit";

//Initial State
const initialState = {
    selectedSession: [],
    isLoading: true
}

/*************************** Export Slice & Reducers *********************************/
// Create location slice
export const selectedSessionSlice = createSlice({
    name:'selectedSession',
    initialState,
    reducers: {
        addSelectedSession:(state, action) => {
            state.selectedSession = action.payload
        },

    },

})

//export slice
export const {addSelectedSession} = selectedSessionSlice.actions
export default selectedSessionSlice.reducer;