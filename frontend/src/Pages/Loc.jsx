import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddLocation from '../Components/AddLocation'
import ListLocation from '../Components/ListLocation'
import SearchBar from '../Components/SearchBar'
import { getLocationList } from '../Redux/LocationSlice'

const Loc = () => {

  const { isLoading } = useSelector((store) => store.location)  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocationList())
    console.log("getlocationlist")
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
    <SearchBar />
    <ListLocation />
    <AddLocation />
    </div>

  )
}

export default Loc