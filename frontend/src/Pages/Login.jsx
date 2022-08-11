import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../Components/sections/@dashboard/auth/login/LoginForm";
import { loginThunk } from "../Redux/authSlice";

//@mui
import {
  Stack,
  IconButton,
  InputAdornment,
  FilledInput,
  Button,
} from "@mui/material";
import Iconify from "../Components/Iconify";

const Login = ({ sx, color = "grey", ...other }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const auth = useSelector((store) => store.auth.isAuthenticated);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/dashboard");
    }
  }, [auth, navigate]);

  //Handle typed input value
  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredential((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <Stack spacing={2}>
      <h1>Login</h1>

      {/* <LoginForm /> */}

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
          dispatch(loginThunk(credential));
        }}
      >
        Login
      </Button>
    </Stack>
  );
};

export default Login;
