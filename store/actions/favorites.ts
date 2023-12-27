import { Product } from '@/globals';

export const SHOW = 'SHOW';
export const TOGGLE = 'TOGGLE';
export const SET_INITIAL_FAVORITES = 'SET_INITIAL_FAVORITES';

export const showFavorites = (toggle: boolean) => ({
  type: SHOW,
  payload: toggle,
});

export const toggleFavorite = (item: Product) => ({
  type: TOGGLE,
  payload: item,
});

export const setInitialFavorites = (favoriteItems: Product[]) => ({
  type: SET_INITIAL_FAVORITES,
  payload: favoriteItems,
});
