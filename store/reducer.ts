import { setStoreData } from '@/helper';
import { Product } from '@/util/types';

import { SET_INITIAL_FAVS, SHOWFAVS, TOGGLEFAVS } from './actions';

type AppState = {
  favoriteItems: Product[];
  showFavorites: boolean;
};

export const initialState: AppState = {
  favoriteItems: [],
  showFavorites: false,
};

type Action = {
  type: string;
  payload?: any;
};

export const reducer = (state: AppState = initialState, action: Action) => {
  switch (action.type) {
    case TOGGLEFAVS:
      const index = state.favoriteItems.findIndex(
        (i) => i.id === action.payload.id
      );
      if (index < 0) {
        setStoreData([...state.favoriteItems, action.payload], 'favorites');

        return {
          ...state,
          favoriteItems: [...state.favoriteItems, action.payload],
        };
      } else {
        const newItems = state.favoriteItems.filter(
          (i) => i.id !== action.payload.id
        );
        setStoreData(newItems, 'favorites');
        return { ...state, favoriteItems: newItems };
      }

    case SET_INITIAL_FAVS:
      return {
        ...state,
        favoriteItems: action.payload,
      };

    case SHOWFAVS:
      return { ...state, showFavorites: action.payload };

    default:
      return state;
  }
};

export { type AppState };
