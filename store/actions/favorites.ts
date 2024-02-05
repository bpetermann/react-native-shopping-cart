import { Product } from '@/globals';

export const SHOW = 'SHOW' as const;
export const TOGGLE = 'TOGGLE' as const;
export const SET_INITIAL_FAVORITES = 'SET_INITIAL_FAVORITES' as const;

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
