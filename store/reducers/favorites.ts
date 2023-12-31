import { TOGGLE, SHOW, SET_INITIAL_FAVORITES } from '../actions';
import { setStoreData } from '@/helper';
import { Product } from '@/globals';

type FavoritesState = {
  favoriteItems: Product[];
  showFavorites: boolean;
};

export const initialFavoritesState: FavoritesState = {
  favoriteItems: [],
  showFavorites: false,
};

type Action = {
  type: string;
  payload?: any;
};

export const favoritesReducer = (
  state: FavoritesState = initialFavoritesState,
  action: Action
) => {
  switch (action.type) {
    case TOGGLE:
      const index = state.favoriteItems.findIndex(
        (i) => i.id === action.payload.id
      );
      if (index < 0) {
        const newFavoriteItems = [...state.favoriteItems, action.payload];
        setStoreData(newFavoriteItems, 'favorites');

        return {
          ...state,
          favoriteItems: newFavoriteItems,
        };
      } else {
        const updatedFavoriteItems = state.favoriteItems.filter(
          (i) => i.id !== action.payload.id
        );
        setStoreData(updatedFavoriteItems, 'favorites');
        return { ...state, favoriteItems: updatedFavoriteItems };
      }

    case SET_INITIAL_FAVORITES:
      return { ...state, favoriteItems: action.payload };

    case SHOW:
      return { ...state, showFavorites: action.payload };

    default:
      return state;
  }
};

export { type FavoritesState };
