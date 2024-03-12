import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Typography, Button, Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import React from 'react';

import { TextFieldController } from '../../components/UI_components/TextFieldController';
import { SignInSchema } from '../../constants/ValidationSchemas';
import { usersGet } from '../../services/authorizationService';
import { ISignInData } from '../../types';

export const SignIn = () => {
  const { handleSubmit, control, reset } = useForm<ISignInData>({
    resolver: yupResolver(SignInSchema),
    mode: 'onBlur',
  });

  const navigate = useNavigate();

  const handleGoToSignUp = () => {
    reset();
    navigate('/sign-up');
  };

  const handleSignIn = async (data: ISignInData) => {
    const { password, email } = data;
    try {
      const { data } = await usersGet();
      const findUser = data.find(
        (user: { password: string; email: string }) => {
          return user.email === email && user.password === password;
        },
      );
      localStorage.setItem('token', findUser.token);
      localStorage.setItem('userId', findUser.id);
      reset();
      navigate('/my-profile');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        display: 'flex',
        width: '100%',
      }}
    >
      {
        <Box
          sx={{
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            display: 'flex',
            width: '400px',
            gap: '24px',
          }}
        >
          <Typography fontWeight={600} fontSize={48}>
            Sign In
          </Typography>
          <TextFieldController
            fieldName="email"
            control={control}
            label="Email*"
          />
          <TextFieldController
            fieldName="password"
            label="Password*"
            control={control}
            type="password"
          />
          <Box
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'flex',
              width: '100%',
              gap: '6px',
            }}
          >
            <Button
              onClick={handleSubmit(handleSignIn)}
              endIcon={<DoneIcon />}
              variant="contained"
            >
              Sign In
            </Button>
            OR
            <Button
              endIcon={<ArrowForwardIosIcon />}
              onClick={handleGoToSignUp}
              variant="contained"
              color="secondary"
            >
              Go Sign Up
            </Button>
          </Box>
        </Box>
      }
    </Box>
  );
};
