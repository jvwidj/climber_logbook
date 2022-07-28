import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import sessionReducer from "./SessionSlice";
import locationReducer from "./LocationSlice"
import selectedLocReducer from "./SelectedLoc"
import currentSessionReducer from "./CurrentSession"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        session: sessionReducer,
        location: locationReducer,
        selectedLocation : selectedLocReducer,
        currentSession : currentSessionReducer
    }
})