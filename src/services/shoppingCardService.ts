import axios from 'axios';

import { IAddProductData } from '../types';

export const getAllProducts = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get('http://localhost:8000/products');
    return response;
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (id: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(`http://localhost:8000/products/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const addProductPost = async (data: IAddProductData) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post('http://localhost:8000/products', data);
    return response;
  } catch (error) {
    throw error;
  }
};
