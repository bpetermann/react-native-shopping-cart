import { FavoritesState, favoritesReducer } from './favorites';
import { CartState, cartReducer } from './cart';
import { UserState, userReducer } from './user';
import { combineReducers } from 'redux';

export type RootState = {
  favorites: FavoritesState;
  cart: CartState;
  user: UserState;
};

export const rootReducer = combineReducers({
  favorites: favoritesReducer,
  cart: cartReducer,
  user: userReducer,
});
