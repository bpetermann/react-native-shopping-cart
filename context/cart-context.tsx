import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';
import { Product } from '@/util/types';

interface CartContext {
  cartItems: Product[];
  amount: number;
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  addCartItem: (item: Product) => void;
  removeCartItem: (item: Product) => void;
}

export const CartContext = createContext<CartContext>({
  cartItems: [],
  amount: 0,
  showCart: false,
  setShowCart: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [amount, setAmount] = useState(0);

  const addCartItem = (product: Product) => {
    setCartItems((currentItems) => {
      const existingCartItemIndex = currentItems.findIndex(
        (item) => item.name === product.name
      );
      const existingCartItem = currentItems[existingCartItemIndex];
      let updatedCart;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + 1,
        };
        updatedCart = [...currentItems];
        updatedCart[existingCartItemIndex] = updatedItem;
        return updatedCart;
      } else {
        return [...currentItems, product];
      }
    });
  };

  const removeCartItem = (product: Product) => {
    setCartItems((currentItems) => {
      const existingCartItemIndex = currentItems.findIndex(
        (item) => item.name === product.name
      );
      const existingCartItem = currentItems[existingCartItemIndex];
      let updatedCart;
      if (existingCartItem?.amount > 1) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount - 1,
        };
        updatedCart = [...currentItems];
        updatedCart[existingCartItemIndex] = updatedItem;
        return updatedCart;
      } else {
        return currentItems.filter((item) => item.name !== product.name);
      }
    });
  };

  useEffect(() => {
    const newAmount = cartItems.reduce(function (acc, item) {
      return acc + item.amount;
    }, 0);

    setAmount(newAmount);
  }, [cartItems]);

  const value = {
    cartItems: cartItems,
    amount: amount,
    showCart: showCart,
    setShowCart: setShowCart,
    addCartItem: addCartItem,
    removeCartItem: removeCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
