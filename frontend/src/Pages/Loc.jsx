import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddLocation from '../Components/AddLocation'
import ListLocation from '../Components/ListLocation'
import SearchBar from '../Components/SearchBar'
import { getLocationList } from '../Redux/LocationSlice'
import { useNavigate } from 'react-router-dom'
import { deleteSession, getSessionList } from '../Redux/SessionSlice'

import { Button } from "react-bootstrap"
//
import Page from '../Components/mui/Page'
import { Container } from '@mui/material'

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
    <Page title="Location">
            <Container maxWidth='xl'>
            <h2>Location</h2>
            <Button onClick={() =>  {
              //console.log(sessionList.id)
              dispatch(deleteSession(sessionList.id))
              .then(() => {
                dispatch(getSessionList()) 
              })
              .then(() => {
                navigate("/dashboard")
              })
              }}>back</Button>
            <SearchBar />

            <ListLocation />

            <AddLocation />

            </Container>
    </Page>

  )
}

export default Loc