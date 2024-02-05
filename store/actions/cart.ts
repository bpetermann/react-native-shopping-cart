import { Product } from '@/globals';

export const ADD = 'ADD' as const;
export const REMOVE = 'REMOVE' as const;
export const SHOWCART = 'SHOWCART' as const;
export const SET_INITIAL_CART = 'SET_INITIAL_CART' as const;

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
