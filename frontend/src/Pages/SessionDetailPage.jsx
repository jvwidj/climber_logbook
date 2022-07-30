import React from 'react'
import SessionDetail from "../Components/SessionDetail"

import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SessionDetailPage = () => {
  const navigate = useNavigate()
  return (
    <div>
    <Button onClick={() => navigate("/dashboard")}>back</Button>
    <Button onClick={() => navigate("/dashboard")}>finish</Button>
    <SessionDetail />
    </div>

  )
}

export default SessionDetailPage