import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ListAltIcon from '@mui/icons-material/ListAlt';
import React from 'react';

export const DrawerMenu = [
  {
    icon: <AccountBoxIcon sx={{ fontSize: '20px' }} />,
    route: '/my-profile',
    name: 'My Profile',
    id: '0',
  },
  {
    icon: <LocalMallIcon sx={{ fontSize: '20px' }} />,
    route: '/product-list',
    name: 'Product List',
    id: '1',
  },
  {
    icon: <ShoppingCartIcon sx={{ fontSize: '20px' }} />,
    route: '/shopping-cart',
    name: 'Shopping Cart',
    id: '3',
  },
  {
    icon: <ListAltIcon sx={{ fontSize: '20px' }} />,
    route: '/orders',
    name: 'Orders',
    id: '4',
  },
  {
    icon: <SettingsApplicationsIcon sx={{ fontSize: '20px' }} />,
    route: '/admin',
    name: 'Admin',
    id: '5',
  },
];
