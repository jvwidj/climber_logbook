import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import sessionReducer from "./SessionSlice";
import locationReducer from "./LocationSlice"
import selectedLocReducer from "./SelectedLoc"
import climbReducer from "./ClimbSlice"
import sessionClimbReducer from "./SessionClimbSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        session: sessionReducer,
        sessionClimb: sessionClimbReducer,
        location: locationReducer,
        selectedLocation : selectedLocReducer,
        climb : climbReducer

    }
})