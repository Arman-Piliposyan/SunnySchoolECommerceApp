import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import React, { ReactNode } from 'react';

type Props = {
  sideBarPosition?: 'bottom' | 'right' | 'left' | 'top';
  closeSideBar: () => void;
  backgroundColor?: string;
  children: ReactNode;
  dataTestId?: string;
  isOpen: boolean;
};

export const SideBar = ({
  sideBarPosition = 'right',
  backgroundColor,
  closeSideBar,
  dataTestId,
  children,
  isOpen,
}: Props) => {
  return (
    <>
      <Drawer
        sx={{
          '& .MuiDrawer-paper': {
            backgroundImage: backgroundColor ? 'none' : '#a5b1c2',
            backgroundColor: '#a5b1c2',
            minWidth: '350px',
          },
          position: 'relative',
          zIndex: '1202',
        }}
        anchor={sideBarPosition}
        open={isOpen}
      >
        <IconButton
          sx={{
            '&:hover': { color: '#FF0000' },
            position: 'absolute',
            height: '30px',
            width: '30px',
            right: '6px',
            zIndex: 1203,
            top: '8px',
          }}
          onClick={closeSideBar}
        >
          <CloseIcon data-test-id={dataTestId} />
        </IconButton>
        {children}
      </Drawer>
    </>
  );
};
