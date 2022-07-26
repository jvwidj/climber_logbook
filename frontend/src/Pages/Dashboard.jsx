import React from 'react'
import { useDispatch} from 'react-redux'
import { logoutThunk } from '../Redux/authSlice'

const Dashboard = () => {

  const dispatch = useDispatch();

  return (
    <div>
    <h1>Dashboard</h1>
    <h3>You have successfully logged in!</h3>
    <button onClick={() => {dispatch(logoutThunk())}}>Logout</button>
    </div>
  )
}

export default Dashboard