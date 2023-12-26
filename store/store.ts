import { legacy_createStore as createStore, combineReducers } from 'redux';
import { favoritesReducer, FavoritesState } from './favorites-reducer';
import { cartReducer, CartState } from './cart-reducer';

export type RootState = {
  favorites: FavoritesState;
  cart: CartState;
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  cart: cartReducer,
});

export const store = createStore(rootReducer);
