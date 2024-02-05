import * as cartActions from '../actions/cart';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

type CartDispatchFunction = (action: CartAction) => void;

type CartAction =
  | ReturnType<typeof cartActions.addCartItem>
  | ReturnType<typeof cartActions.removeCartItem>
  | ReturnType<typeof cartActions.openCart>
  | ReturnType<typeof cartActions.setInitialCart>;

export const useCartDispatch: () => CartDispatchFunction = () => {
  const dispatch: AppDispatch = useDispatch();

  const cartDispatch: CartDispatchFunction = (action) => {
    dispatch(action);
  };

  return cartDispatch;
};
