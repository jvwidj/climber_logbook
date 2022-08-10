import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import sessionReducer from "./SessionSlice";
import locationReducer from "./LocationSlice";
import selectedLocReducer from "./SelectedLoc";
import climbReducer from "./ClimbSlice";
import sessionClimbReducer from "./SessionClimbSlice";
import selectedSessionClimbReducer from "./SelectedSessionClimb";
import SelectedSessionReducer from "./SelectedSession";
import SocialReducer from "./SocialSlice";
import FriendReducer from "./FriendSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    session: sessionReducer,
    sessionClimb: sessionClimbReducer,
    location: locationReducer,
    climb: climbReducer,
    selectedLocation: selectedLocReducer,
    selectedSession: SelectedSessionReducer,
    selectedSessionClimb: selectedSessionClimbReducer,
    social: SocialReducer,
    friend: FriendReducer,
  },
});
