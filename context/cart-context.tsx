import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';
import { setStoreData, getStoreData } from '@/helper';
import { Product } from '@/util/types';

interface CartContext {
  cartItems: Product[];
  amount: number;
  showCart: boolean;
  setShowCart: Dispatch<SetStateAction<boolean>>;
  addCartItem: (item: Product) => void;
  removeCartItem: (item: Product) => void;
  getCart: () => void;
}

export const CartContext = createContext<CartContext>({
  cartItems: [],
  amount: 0,
  showCart: false,
  setShowCart: () => {},
  addCartItem: () => {},
  removeCartItem: () => {},
  getCart: () => {},
});

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [amount, setAmount] = useState(0);

  const addCartItem = (product: Product) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.name === product.name
    );
    const existingCartItem = cartItems[existingCartItemIndex];
    let updatedCart;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedCart = [...cartItems];
      updatedCart[existingCartItemIndex] = updatedItem;
      setStoreData(updatedCart, 'cart');
      setCartItems(updatedCart);
    } else {
      setStoreData([...cartItems, product], 'cart');
      setCartItems([...cartItems, product]);
    }
  };

  const removeCartItem = (product: Product) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.name === product.name
    );
    const existingCartItem = cartItems[existingCartItemIndex];
    let updatedCart;
    if (existingCartItem?.amount > 1) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedCart = [...cartItems];
      updatedCart[existingCartItemIndex] = updatedItem;
      setCartItems(updatedCart);
      setStoreData(updatedCart, 'cart');
    } else {
      const newCart = cartItems.filter((item) => item.name !== product.name);
      setCartItems(newCart);
      setStoreData(newCart, 'cart');
    }
  };

  const getCart = async () => {
    const cart = await getStoreData('cart');

    if (Array.isArray(cart)) {
      setCartItems(cart);
    }
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
    getCart: getCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
