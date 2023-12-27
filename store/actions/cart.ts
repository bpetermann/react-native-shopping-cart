import { Product } from '@/util/types';

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const SHOWCART = 'SHOWCART';

export const addCartItem = (product: Product) => ({
  type: ADD,
  payload: product,
});

export const removeCartItem = (product: Product) => ({
  type: REMOVE,
  payload: product,
});

export const openCart = (toggle: boolean) => ({
  type: SHOWCART,
  payload: toggle,
});
