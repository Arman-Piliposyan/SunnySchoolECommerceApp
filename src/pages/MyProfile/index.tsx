import { Typography, Button, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';

import { EditProfileSideBarContent } from './EditProfileSideBarContent';
import { userSelector } from '../../store/user-slice/user-selectors';
import { SideBar } from '../../components/UI_components/SideBar';

export const MyProfile = () => {
  const user = useSelector(userSelector);

  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleCloseSideBar = () => {
    setIsSideBarOpen(false);
  };

  const handleOpenSideBar = () => {
    setIsSideBarOpen(true);
  };

  return (
    <>
      <Box sx={{ flexDirection: 'column', display: 'flex', gap: '16px' }}>
        <Typography fontWeight={700} fontSize={32}>
          My Profile
        </Typography>
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <img
            style={{
              border: '6px groove black',
              borderRadius: '16px',
              height: '250px',
            }}
            src={user?.imageUrl}
          />
          <Box sx={{ flexDirection: 'column', display: 'flex', gap: '8px' }}>
            <Typography fontWeight={700} fontSize={18}>
              FirstName:{' '}
              <Typography component={'span'} fontWeight={500} fontSize={18}>
                {user?.firstName}
              </Typography>
            </Typography>
            <Typography fontWeight={700} fontSize={18}>
              LastName:{' '}
              <Typography component={'span'} fontWeight={500} fontSize={18}>
                {user?.lastName}
              </Typography>
            </Typography>
            <Typography fontWeight={700} fontSize={18}>
              Phone :{' '}
              <Typography component={'span'} fontWeight={500} fontSize={18}>
                {user?.phone}
              </Typography>
            </Typography>
            <Typography fontWeight={700} fontSize={18}>
              Email:{' '}
              <Typography component={'span'} fontWeight={500} fontSize={18}>
                {user?.email}
              </Typography>
            </Typography>
            <Box
              sx={{
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                paddingBottom: '4px',
                display: 'flex',
                flex: '1 0',
              }}
            >
              <Button
                onClick={handleOpenSideBar}
                endIcon={<EditIcon />}
                variant="contained"
              >
                Edit Profile
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <SideBar closeSideBar={handleCloseSideBar} isOpen={isSideBarOpen}>
        <EditProfileSideBarContent handleCloseSideBar={handleCloseSideBar} />
      </SideBar>
    </>
  );
};
