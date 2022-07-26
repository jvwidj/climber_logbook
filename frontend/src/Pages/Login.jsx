import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginThunk } from '../Redux/authSlice'


const Login = () => {

  const [credential, setCredential] = useState({
    email:"",
    password:"",
  })

  const auth = useSelector((store) => store.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(auth) {
      navigate("/dashboard");
    }
  }, [auth, navigate]);

  //Handle typed input value
  const handleChange = (event) => {
    const {name, value} = event.target;
    setCredential((prevValue) => ({
      ...prevValue,
      [name]:value,
    }))
  }

  return (
   <div>
      <h1>Login</h1>

      {/* username */}
      <input
        type="text"
        name="username"
        placeholder='username'
        onChange={handleChange}
      />

      {/* password */}
      <input
        type="password"
        name="password"
        placeholder='password'
        onChange={handleChange}
      />

      {/* submit button */}
      <button type='submit' onClick={() => dispatch(loginThunk(credential))}>
        Login
      </button>

   </div>
  )
}

export default Login