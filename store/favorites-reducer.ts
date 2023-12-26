import { setStoreData } from '@/helper';
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

type AppState = {
  favoriteItems: Product[];
  showFavorites: boolean;
};

export const initialFavoritesState: AppState = {
  favoriteItems: [],
  showFavorites: false,
};

type Action = {
  type: string;
  payload?: any;
};

export const favoritesReducer = (state: AppState = initialFavoritesState, action: Action) => {
  switch (action.type) {
    case TOGGLEFAVS:
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

    case SET_INITIAL_FAVS:
      return { ...state, favoriteItems: action.payload };

    case SHOWFAVS:
      return { ...state, showFavorites: action.payload };

    default:
      return state;
  }
};

export { type AppState };
