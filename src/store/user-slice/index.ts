import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { me } from '../../services/userService';

type User = {
  firstName: string;
  lastName: string;
  imageUrl: string;
  email: string;
  phone: string;
  id: number;
};

type UserStateType = {
  user: User | null;
  loading: boolean;
};

const initialState: UserStateType = {
  loading: true,
  user: null,
};

export const getUser = createAsyncThunk(
  'user/me',
  async (_, { rejectWithValue }) => {
    try {
      const userId = localStorage.getItem('userId');
      const { data } = await me(userId as string);
      return data;
    } catch (e) {
      return rejectWithValue('Error');
    }
  },
);

const userSlice = createSlice({
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.loading = false;
    });
  },
  reducers: {},
  name: 'user',
  initialState,
});

// eslint-disable-next-line no-empty-pattern
export const {} = userSlice.actions;

export default userSlice.reducer;
