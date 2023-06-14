import {
  Searchbar,
  Categories,
  Hero,
  Products,
  Cart,
  Header,
} from '../Organisms';
import { ScrollView } from 'react-native';
import { useState } from 'react';

export default function Template() {
  const [category, setCategory] = useState('Shoes');
  const [search, setSearch] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <>
      <Header openCart={setShowCart} />
      <ScrollView>
        <Searchbar search={setSearch} />
        <Categories change={setCategory} category={category} />
        <Hero />
        <Products category={category} search={search} add={addCartItem} />
      </ScrollView>
      <Cart
        closeCart={setShowCart}
        show={showCart}
        cartItems={cartItems}
        add={addCartItem}
        remove={removeCartItem}
      />
    </>
  );
}
