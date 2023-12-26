import { RootState } from './store';

export const selectFavoriteItems = (state: RootState) =>
  state.favorites.favoriteItems;
export const selectShowFavorites = (state: RootState) =>
  state.favorites.showFavorites;
