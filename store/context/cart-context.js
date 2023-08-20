import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({
  cartItems: [],
  amount: undefined,
  addCartItem: (product) => {},
  removeCartItem: (product) => {},
});

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [amount, setAmount] = useState([]);

  const addCartItem = (product) => {
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

  const removeCartItem = (product) => {
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
    addCartItem: addCartItem,
    removeCartItem: removeCartItem,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
