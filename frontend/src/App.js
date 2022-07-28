
import {Routes, Route} from "react-router-dom"

import './App.css';

import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import RequireAuth from "./Components/Auth/RequireAuth";
import Signup from "./Pages/Signup";
import Loc from "./Pages/Loc";
import ClimbRoute from "./Pages/ClimbRoute";
import Header from "./Components/Header";
import Session from "./Pages/Session";
import NavbarFooter from "./Components/NavbarFooter";

//import Landing from "./Pages/Landing"


function App() {
  return (
    <div className="App container">

      {/* <Link to="/dashboard">Dashboard</Link> */}

      {/* <Login /> */}
      <Header />

      <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/location" element={<Loc />} />
        <Route path="/climb" element={<ClimbRoute />} />
        <Route path="/session" element={<Session />} />

        <Route 
          path="/dashboard"
          element={
            <RequireAuth redirectTo="/">
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
      </div>

      <NavbarFooter />
    </div>
  );
}

export default App;
