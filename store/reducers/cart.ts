import { setStoreData } from '@/helper';
import { Product } from '@/util/types';
import { ADD } from '../actions';

export type CartState = {
  cartItems: Product[];
  amount: number;
  showCart: boolean;
};

export const initialCartState: CartState = {
  cartItems: [],
  amount: 0,
  showCart: false,
};

type Action = {
  type: string;
  payload?: any;
};

export const cartReducer = (
  state: CartState = initialCartState,
  action: Action
) => {
  switch (action.type) {
    case ADD:
      const existingCartItemIndex = state.cartItems.findIndex(
        (item) => item.name === action.payload.name
      );
      const existingCartItem = state.cartItems[existingCartItemIndex];
      let updatedCart;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };
        updatedCart = [...state.cartItems];
        updatedCart[existingCartItemIndex] = updatedItem;
        setStoreData(updatedCart, 'cart');
        return { ...state, cartItems: updatedCart };
      } else {
        const newCartItems = [...state.cartItems, action.payload];
        setStoreData(newCartItems, 'cart');
        return { ...state, cartItems: newCartItems };
      }

    default:
      return state;
  }
};
