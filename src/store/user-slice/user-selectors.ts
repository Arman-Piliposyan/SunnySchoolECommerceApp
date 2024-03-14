import { createSelector } from '@reduxjs/toolkit';

import { RootStateType } from '..';

const selector = (state: RootStateType) => state.user;

export const userSelector = createSelector(selector, (user) => user.user);
export const loadingSelector = createSelector(selector, (user) => user.loading);
