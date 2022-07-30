import { createSlice } from "@reduxjs/toolkit";

//Initial State
const initialState = {
    selectedLocation: [],
    isLoading: true
}


/*************************** Export Slice & Reducers *********************************/
// Create location slice
export const locationSlice = createSlice({
    name:'location',
    initialState,
    reducers: {
        addLocationData:(state, action) => {
            state.selectedLocation = action.payload
        },

    },

})

//export slice
export const {addLocationData} = locationSlice.actions
export default locationSlice.reducer;