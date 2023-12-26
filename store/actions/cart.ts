import { Product } from '@/util/types';

export const ADD = 'ADD';

export const addCartItem = (product: Product) => ({
  type: ADD,
  payload: product,
});

