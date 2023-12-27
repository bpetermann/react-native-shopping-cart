import { RootState } from '../reducers';

export const selectCartItems = (state: RootState) => state.cart.cartItems;

export const selectShowCart = (state: RootState) => state.cart.showCart;

export const selectCartAmount = (state: RootState) =>
  state.cart.cartItems.reduce(function (acc, item) {
    return acc + item.amount;
  }, 0);
