import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import sessionReducer from "./SessionSlice";
import locationReducer from "./LocationSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        session: sessionReducer,
        location: locationReducer,
    }
})