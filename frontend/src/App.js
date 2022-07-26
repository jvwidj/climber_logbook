
import {Routes, Route, Link} from "react-router-dom"

import './App.css';

import Dashboard from "./Pages/Dashboard"
import Landing from "./Pages/Landing"
import Login from "./Pages/Login"
import AddLog from "./Pages/AddLog" 

function App() {
  return (
    <div className="App container">
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
