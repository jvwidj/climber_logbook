import React, { useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import AddSession from '../Components/AddSession'
import ListSession from '../Components/ListSession'
import PerformanceDash from '../Components/PerformanceDash'
import { getUserData, logoutThunk } from '../Redux/authSlice'
import { getSessionList } from '../Redux/SessionSlice'

const Dashboard = () => {

  const { isLoading } = useSelector((store) => store.session);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSessionList())
  }, [dispatch])

  useEffect(() => {
    dispatch(getUserData())
  }, [dispatch])

  if(isLoading){
    return (
      <div className="loading text-center my-5">
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div style={{paddingBottom:"25px"}}>
    <h1>Dashboard</h1>
    <h5>You have successfully logged in!</h5>
    
    <button onClick={() => {dispatch(logoutThunk())}}>Logout</button>


    <AddSession />

    <div>
    <ListSession />
    </div>
    <PerformanceDash />
    </div>
  )
}

export default Dashboard