import { RootState } from '../reducers';

export const selectFavoriteItems = (state: RootState) =>
  state.favorites.favoriteItems;

export const selectShowFavorites = (state: RootState) =>
  state.favorites.showFavorites;
