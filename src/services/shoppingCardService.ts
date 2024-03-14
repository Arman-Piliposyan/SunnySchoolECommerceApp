import axios from 'axios';

import { IAddProductToCardData, IOrderData } from '../types';

export const addToCardPost = async (data: IAddProductToCardData) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post(
      'http://localhost:8000/shoppingCards',
      data,
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getShoppingCardItems = async (userId: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(
      `http://localhost:8000/shoppingCards/?userId=${userId}`,
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteItemFromCard = async (prodcutId: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.delete(
      `http://localhost:8000/shoppingCards/${prodcutId}`,
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const orderPost = async (data: IOrderData) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.post('http://localhost:8000/orders', data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getOrders = async (userId: string) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await axios.get(
      `http://localhost:8000/orders/?userId=${userId}`,
    );
    return response;
  } catch (error) {
    throw error;
  }
};
