import React from "react";
import SessionCard from "../Components/SessionCard";
//import SessionDetail from '../Components/SessionDetail'

import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSessionList } from "../Redux/SessionSlice";

const Session = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFinish = async (event) => {
    event.preventDefault();
    console.log("new session added");
    try {
      dispatch(getSessionList()).then(() => {
        navigate("/dashboard");
      });
    } catch (error) {
      console.log("add session error", error);
    }
  };

  return (
    <div>
      <Button onClick={() => navigate("/location")}>back</Button>
      <Button onClick={handleFinish}>finish</Button>
      <SessionCard />
    </div>
  );
};

export default Session;
