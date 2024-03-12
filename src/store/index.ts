import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import userSlice from './user-slice';

export const store = configureStore({
  reducer: { user: userSlice },
});

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
