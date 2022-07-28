import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddLocation from '../Components/AddLocation'
import ListLocation from '../Components/ListLocation'
import SearchBar from '../Components/SearchBar'
import { getLocationList } from '../Redux/LocationSlice'
import { useNavigate } from 'react-router-dom'

import { Button } from "react-bootstrap"

const Loc = () => {

  const { isLoading } = useSelector((store) => store.location)  
  const { sessionList } = useSelector((store) => store.session)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getLocationList())
    //console.log("getlocationlist")
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
    <h2>Location</h2>
    <Button onClick={() => {
      console.log(sessionList)
      navigate("/dashboard")}}>back</Button>
    <SearchBar />

    <ListLocation />

    <AddLocation />
    </div>

  )
}

export default Loc