import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Typography, Button, Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import DoneIcon from '@mui/icons-material/Done';
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';

import { TextFieldController } from '../../components/UI_components/TextFieldController';
import { PhoneInput } from '../../components/UI_components/PhoneInput';
import { signUpPost } from '../../services/authorizationService';
import { SignUpSchema } from '../../constants/ValidationSchemas';
import { ISignUpData } from '../../types';

export const SignUp = () => {
  const { handleSubmit, control, reset } = useForm<ISignUpData>({
    resolver: yupResolver(SignUpSchema),
    mode: 'onBlur',
  });
  const navigate = useNavigate();

  const [showSignUpSuccess, setShowSignUpSuccess] = useState(false);

  const handleGoToSignIn = () => {
    navigate('/sign-in');
  };

  const handleSignUp = async (data: ISignUpData) => {
    const { firstName, lastName, imageUrl, password, email, phone } = data;
    try {
      await signUpPost({
        firstName,
        lastName,
        imageUrl,
        password,
        email,
        phone,
      });
      reset();
      setShowSignUpSuccess(true);
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
      {showSignUpSuccess ? (
        <Box
          sx={{
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            display: 'flex',
            gap: '24px',
          }}
        >
          <Typography fontWeight={600} fontSize={44}>
            Success <DoneIcon sx={{ fontSize: '44px', color: 'green' }} />
          </Typography>
          <Button
            startIcon={<ArrowBackIosIcon />}
            onClick={handleGoToSignIn}
            variant="contained"
          >
            Go Sign In
          </Button>
        </Box>
      ) : (
        <Box
          sx={{
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            display: 'flex',
            width: '400px',
            gap: '16px',
          }}
        >
          <Typography fontWeight={600} fontSize={24}>
            Sign Up
          </Typography>
          <TextFieldController
            fieldName="firstName"
            label="FirstName*"
            control={control}
          />
          <TextFieldController
            fieldName="lastName"
            label="LastName*"
            control={control}
          />
          <TextFieldController
            fieldName="email"
            control={control}
            label="Email*"
          />
          <PhoneInput inputName="phone" control={control} />
          <TextFieldController
            fieldName="imageUrl"
            label="Image Url*"
            control={control}
          />
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <TextFieldController
              fieldName="password"
              label="Password*"
              control={control}
              type="password"
            />
            <TextFieldController
              fieldName="confirmPassword"
              label="Confirm Password*"
              control={control}
              type="password"
            />
          </Box>
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
              startIcon={<ArrowBackIosIcon />}
              onClick={handleGoToSignIn}
              variant="contained"
              color="secondary"
            >
              Go Sign In
            </Button>
            OR
            <Button
              onClick={handleSubmit(handleSignUp)}
              endIcon={<DoneIcon />}
              variant="contained"
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};
