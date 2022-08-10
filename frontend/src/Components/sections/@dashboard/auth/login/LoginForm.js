import React, { useEffect, useState } from 'react'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
//form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//@mui
import { Link, Stack, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
//components
import Iconify from '../../../../Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../../../Components/hook-form';
//
import { loginThunk } from '../../../../../Redux/authSlice';

// ------------------------------------------------------------------------------------------

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ showPassword, setShowPassword ] = useState(false);
    
    //Credentials
    const auth = useSelector((store) => store.auth.isAuthenticated);
    const [credential, setCredential] = useState({
        email:"",
        password:"",
      })

     //Handle typed input value
    const handleChange = (event) => {
        const {name, value} = event.target;
        setCredential((prevValue) => ({
        ...prevValue,
        [name]:value,
        }))
    }

    useEffect(() => {
        if(auth) {
          navigate("/dashboard");
        }
      }, [auth, navigate]);

    const LoginSchema = Yup.object().shape({
        email: Yup.string().email('Email must be a valid email address').required('Email is required'),
        password: Yup.string().required('Password is required'),
      });
    
      const defaultValues = {
        email: '',
        password: '',
        remember: true,
      };
    
      const methods = useForm({
        resolver: yupResolver(LoginSchema),
        defaultValues,
      });
    
      const {
        handleSubmit,
        formState: { isSubmitting },
      } = methods;
    
      const onSubmit = async () => {
        console.log(methods)
        //navigate('/dashboard', { replace: true });
      };

      

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
            
            <RHFTextField 
                name="email" 
                label="email address"
                //onChange={handleChange}
                />

            <RHFTextField
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                //onChange={handleChange}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                        <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                    </InputAdornment>
                    ),
                }}
                />
        </Stack>

        <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <RHFCheckbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton 
        fullWidth size="large" 
        type="submit" 
        variant="contained" 
        loading={isSubmitting}
        //onClick={() => dispatch(loginThunk(credential))}
        >
        Login
      </LoadingButton>
    </FormProvider>
  )
}

export default LoginForm