import { ADD, REMOVE, SHOWCART } from '../actions';
import { setStoreData } from '@/helper';
import { Product } from '@/util/types';

export type CartState = {
  cartItems: Product[];
  showCart: boolean;
};

export const initialCartState: CartState = {
  cartItems: [],
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

    case REMOVE:
      const toBeRemoved = state.cartItems.findIndex(
        (item) => item.name === action.payload.name
      );
      const existingItem = state.cartItems[toBeRemoved];
      let cartUpdate;
      if (existingItem?.amount > 1) {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        cartUpdate = [...state.cartItems];
        cartUpdate[toBeRemoved] = updatedItem;
        setStoreData(cartUpdate, 'cart');
        return { ...state, cartItems: cartUpdate };
      } else {
        const newCart = state.cartItems.filter(
          (item) => item.name !== action.payload.name
        );
        setStoreData(newCart, 'cart');
        return { ...state, cartItems: newCart };
      }

    case SHOWCART:
      return { ...state, showCart: action.payload };

    default:
      return state;
  }
};
