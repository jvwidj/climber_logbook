import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addSelectedSession } from '../Redux/SelectedSession'
import { getSelectedClimb } from '../Redux/SelectedSessionClimb'
import { postSession } from '../Redux/SessionSlice'


const AddSession = () => {
  const navigate = useNavigate()
  //const dispatch = useDispatch()
  const dispatch = useDispatch()
  const { userData } = useSelector((store) => store.auth)
  
  const onClickButton = async event => {
    event.preventDefault()
    try {
      const user_id = userData[0].id
      dispatch(postSession(user_id))
      .then((data) => {
        //console.log(data.payload)
        dispatch(addSelectedSession(data.payload))
      })
      navigate("/location")
    } catch (error) {
      
    }
  }

  return (
    <div>
    <h4>Add Session</h4>

    <button
      onClick={onClickButton}
      >Add Session</button>
    </div>
  )
}

export default AddSession