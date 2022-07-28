import { createSlice } from "@reduxjs/toolkit";

//Initial State
const initialState = {
    currentSession: [],
    isLoading: true
}


/*************************** Export Slice & Reducers *********************************/
// Create location slice
export const currentSessionSlice = createSlice({
    name:'currentSession',
    initialState,
    reducers: {
        getCurrentSession:(state, action) => {
            state.currentSession = action.payload
        },

    },

})

//export slice
export const {getCurrentSession} = currentSessionSlice.actions
export default currentSessionSlice.reducer;