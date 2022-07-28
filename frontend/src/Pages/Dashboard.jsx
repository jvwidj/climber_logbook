import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import AddSession from '../Components/AddSession'
import ListSession from '../Components/ListSession'
import PerformanceDash from '../Components/PerformanceDash'
import { logoutThunk } from '../Redux/authSlice'
import { getSessionList } from '../Redux/SessionSlice'


const Dashboard = () => {

  const { isLoading } = useSelector((store) => store.session);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getSessionList())
  }, [dispatch])

  if(isLoading){
    return (
      <div className="loading text-center my-5">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div>
    <h1>Dashboard</h1>
    <h5>You have successfully logged in!</h5>
    
    <button onClick={() => {dispatch(logoutThunk())}}>Logout</button>

    <button onClick={() => navigate("/location")}>Add Session</button>

    {/* <AddSession /> */}

    <div>
    <ListSession />
    </div>
    <PerformanceDash />
    </div>
  )
}

export default Dashboard