import React from 'react'
import SessionCard from '../Components/SessionCard'

import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Session = () => {
  const navigate = useNavigate()
  return (
    <div>
    <Button onClick={() => navigate("/location")}>back</Button>
    <Button onClick={() => navigate("/activity")}>finish</Button>
    <SessionCard />
    </div>

  )
}

export default Session