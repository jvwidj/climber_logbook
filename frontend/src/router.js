import { Routes, Route, useRoutes, Navigate } from "react-router-dom";

//layouts
import DashboardLayout from "./Layouts/Dashboard/Index";

//
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import RequireAuth from "./Components/Auth/RequireAuth";
import Signup from "./Pages/Signup";
import Loc from "./Pages/Loc";
import Activity from "./Pages/Activity";
import Session from "./Pages/Session";
import Profile from "./Pages/Profile";

import AddClimb from "./Pages/AddClimb";
import LocRoute from "./Pages/LocRoute";
import SessionDetailPage from "./Pages/SessionDetailPage";
import Social from "./Pages/Social";
import Friend from "./Pages/Friend";
export default function Router() {
  return (
    <Routes>
      {/* <Route path="/" element={<DashboardLayout />}>

          
        </Route> */}
      <Route path="/friend" element={<Friend />} />
      <Route path="/social" element={<Social />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/location" element={<Loc />} />
      <Route path="/location/route" element={<LocRoute />} />
      <Route path="/session" element={<Session />} />
      <Route path="/session_detail" element={<SessionDetailPage />} />
      <Route path="/session/climb" element={<AddClimb />} />

      <Route path="/dashboard/activity" element={<Activity />} />
      <Route path="/dashboard/profile" element={<Profile />} />

      <Route
        path="/dashboard"
        element={
          <RequireAuth redirectTo="/login">
            <Dashboard />
          </RequireAuth>
        }
      ></Route>
    </Routes>
  );
}

/*     return useRoutes( [
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
          { path: '/app', element: <Dashboard />},
          { path: 'session', element: <Session />},
          { path: 'session/detail', element: <SessionDetailPage />},
          { path: 'session/climb', element: <AddClimb />},
          { path: 'location', element: <Loc />},
          { path: 'location/route', element: <LocRoute />}

        ]
      },
      {
        path: '/',
        element: <DashboardLayout />,
        children: [
          { path: '/', element: [
            <RequireAuth redirectTo="/">
              <Dashboard />
            </RequireAuth>]},
          { path: 'signup', element: <Signup />},
          { path: 'login', element: <Login />},
          { path: '404', element: ""},
          { path: '*', element: ""},
        ]
      },
      { path: '*', element: <Navigate to="/404" replace />}

    ]) */
