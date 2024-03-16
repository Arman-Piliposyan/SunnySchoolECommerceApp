import { Typography, Button, Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import SaveIcon from '@mui/icons-material/Save';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import React from 'react';

import { TextFieldController } from '../../components/UI_components/TextFieldController';
import { PhoneInput } from '../../components/UI_components/PhoneInput';
import { userSelector } from '../../store/user-slice/user-selectors';
import { ProfileSchema } from '../../constants/ValidationSchemas';
import { editProfile } from '../../services/userService';
import { getUser } from '../../store/user-slice';
import { useAppDispatch } from '../../store';
import { IProfileData } from '../../types';
type Props = { handleCloseSideBar: () => void };

export const EditProfileSideBarContent = ({ handleCloseSideBar }: Props) => {
  const dispatch = useAppDispatch();
  const user = useSelector(userSelector);

  const { handleSubmit, control } = useForm<IProfileData>({
    resolver: yupResolver(ProfileSchema),
    defaultValues: user || {},
    mode: 'onBlur',
  });

  const handleSave = async (data: IProfileData) => {
    try {
      await editProfile({ id: user?.id.toString() as string, data });
      dispatch(getUser());
      toast.success('Success');
      handleCloseSideBar();
    } catch (error) {
      toast.error('Fail');
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        padding: '8px 16px 16px 16px',
        flexDirection: 'column',
        alignItems: 'center',
        display: 'flex',
        height: '100%',
        width: '100%',
        gap: '24px',
      }}
    >
      <Typography sx={{ mb: '48px' }} fontWeight={700} fontSize={24}>
        Edit Your Profile
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
      <TextFieldController fieldName="email" control={control} label="Email*" />
      <PhoneInput inputName="phone" control={control} />
      <TextFieldController
        fieldName="imageUrl"
        label="Image Url*"
        control={control}
      />
      <Box
        sx={{
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          display: 'flex',
          width: '100%',
          flex: '1 0',
        }}
      >
        <Button
          onClick={handleSubmit(handleSave)}
          endIcon={<SaveIcon />}
          variant="contained"
        >
          Save
        </Button>
      </Box>
    </Box>
  );
};
