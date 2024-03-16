import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

import { userSelector } from '../../store/user-slice/user-selectors';

export const PublicRoute = () => {
  const user = useSelector(userSelector);

  const token = localStorage.getItem('token');
  return !token ? (
    <Outlet />
  ) : (
    <Navigate to={user && user.id === 0 ? '/admin' : '/my-profile'} />
  );
};
