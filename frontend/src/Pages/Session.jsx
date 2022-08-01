import React from 'react'
import SessionCard from '../Components/SessionCard'
//import SessionDetail from '../Components/SessionDetail'

import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Session = () => {
  const navigate = useNavigate()
  return (
    <div>
    <Button onClick={() => navigate("/location")}>back</Button>
    <Button onClick={() => navigate("/dashboard")}>finish</Button>
    <SessionCard />
    </div>

  )
}

export default Session