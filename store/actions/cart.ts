import { Product } from '@/util/types';

export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const SHOWCART = 'SHOWCART';
export const SET_INITIAL_CART = 'SET_INITIAL_CART';

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

export const setInitialCart = (cart: Product[]) => ({
  type: SET_INITIAL_CART,
  payload: cart,
});
