import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupThunk } from "../Redux/authSlice";
//@mui
import {
  Stack,
  IconButton,
  InputAdornment,
  FilledInput,
  Button,
} from "@mui/material";
import Iconify from "../Components/Iconify";

const Signup = ({ sx, color = "grey", ...other }) => {
  const [credential, setCredential] = useState({
    username: "",
    email: "",
    password: "",
    fname: "",
    lname: "",
  });

  const [showPassword, setShowPassword] = useState(false);

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
    <Stack spacing={2}>
      <h1>Sign Up</h1>
      <FilledInput
        sx={{
          py: 0,
          boxShadow: 0,
          textAlign: "center",
          display: "block",
          color: (theme) => theme.palette[color].darker,
          bgcolor: (theme) => theme.palette[color].lighter,
          ...sx,
        }}
        {...other}
        type="text"
        name="fname"
        placeholder="first name"
        onChange={handleChange}
      />

      <FilledInput
        sx={{
          py: 0,
          boxShadow: 0,
          textAlign: "center",
          display: "block",
          color: (theme) => theme.palette[color].darker,
          bgcolor: (theme) => theme.palette[color].lighter,
          ...sx,
        }}
        {...other}
        type="text"
        name="lname"
        placeholder="last name"
        onChange={handleChange}
      />

      <FilledInput
        sx={{
          py: 0,
          boxShadow: 0,
          textAlign: "center",
          display: "block",
          color: (theme) => theme.palette[color].darker,
          bgcolor: (theme) => theme.palette[color].lighter,
          ...sx,
        }}
        {...other}
        type="text"
        name="username"
        placeholder="username"
        onChange={handleChange}
      />

      <FilledInput
        sx={{
          py: 0,
          boxShadow: 0,
          textAlign: "center",
          display: "block",
          color: (theme) => theme.palette[color].darker,
          bgcolor: (theme) => theme.palette[color].lighter,
          ...sx,
        }}
        {...other}
        type="text"
        name="email"
        placeholder="email"
        onChange={handleChange}
      />

      <FilledInput
        type="password"
        name="password"
        placeholder="password"
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                onClick={() => setShowPassword(!showPassword)}
                edge="end"
              >
                <Iconify
                  icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <Button
        type="submit"
        onClick={() => {
          dispatch(signupThunk(credential)).then(() => navigate("/login"));
        }}
      >
        Sign Up
      </Button>
    </Stack>
  );
};

export default Signup;
