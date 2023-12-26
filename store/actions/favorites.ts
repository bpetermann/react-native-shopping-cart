import { Product } from '@/util/types';

export const SHOWFAVS = 'SHOWFAVS';
export const TOGGLEFAVS = 'TOGGLEFAVS';
export const GETFAVS = 'GETFAVS';
export const SET_INITIAL_FAVS = 'SET_INITIAL_FAVS';

export const showFavorites = (toggle: boolean) => ({
  type: SHOWFAVS,
  payload: toggle,
});

export const toggleFavorite = (item: Product) => ({
  type: TOGGLEFAVS,
  payload: item,
});

export const setInitialFavorites = (favoriteItems: Product[]) => ({
  type: SET_INITIAL_FAVS,
  payload: favoriteItems,
});
