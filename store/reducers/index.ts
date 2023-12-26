import { FavoritesState, favoritesReducer } from './favorites';
import { CartState, cartReducer } from './cart';
import { combineReducers } from 'redux';

export type RootState = {
  favorites: FavoritesState;
  cart: CartState;
};

export const rootReducer = combineReducers({
  favorites: favoritesReducer,
  cart: cartReducer,
});
