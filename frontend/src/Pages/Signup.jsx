import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupThunk } from "../Redux/authSlice";

const Signup = () => {
  const [credential, setCredential] = useState({
    username: "",
    email: "",
    password: "",
    fname: "",
    lname: "",
  });

  const auth = useSelector((store) => store.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/dashboard");
    }
  }, [auth, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredential((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <div>
      Signup
      {/* username */}
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={handleChange}
      />
      {/* email */}
      <input
        type="text"
        name="email"
        placeholder="email"
        onChange={handleChange}
      />
      {/* password */}
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
      />
      {/* fname */}
      <input
        type="text"
        name="fname"
        placeholder="First Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="lname"
        placeholder="Last Name"
        onChange={handleChange}
      />
      <button
        type="submit"
        onClick={() =>
          dispatch(signupThunk(credential)).then(() => navigate("/login"))
        }
      >
        Signup
      </button>
    </div>
  );
};

export default Signup;
