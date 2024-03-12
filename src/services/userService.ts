import axios from 'axios';

import { IProfileData } from '../types';

export const me = async (id: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`http://localhost:8000/users/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const editProfile = async ({
  data,
  id,
}: {
  data: IProfileData;
  id: string;
}) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.put(`http://localhost:8000/users/${id}`, data);
    return response;
  } catch (error) {
    throw error;
  }
};
