import * as favoritesActions from '../actions/favorites';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

type FavoritesDispatchFunction = (action: FavoritesAction) => void;

type FavoritesAction =
  | ReturnType<typeof favoritesActions.showFavorites>
  | ReturnType<typeof favoritesActions.toggleFavorite>
  | ReturnType<typeof favoritesActions.setInitialFavorites>;

export const useFavoritesDispatch: () => FavoritesDispatchFunction = () => {
  const dispatch: AppDispatch = useDispatch();

  const favoritesDispatch: FavoritesDispatchFunction = (action) => {
    dispatch(action);
  };

  return favoritesDispatch;
};
