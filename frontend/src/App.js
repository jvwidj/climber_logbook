
import {Routes, Route} from "react-router-dom"

import './App.css';

import Login from "./Pages/Login"
import Dashboard from "./Pages/Dashboard"
import RequireAuth from "./Components/Auth/RequireAuth";
import Signup from "./Pages/Signup";
//import Landing from "./Pages/Landing"


function App() {
  return (
    <div className="App container">

      {/* <Link to="/dashboard">Dashboard</Link> */}

      {/* <Login /> */}

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />

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
  );
}

export default App;
