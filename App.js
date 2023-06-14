import {
  Header,
  Searchbar,
  Categories,
  Hero,
  Products,
  Cart,
} from './components';
import { View, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [category, setCategory] = useState('Shoes');
  const [search, setSearch] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addCartItem = (product) => {
    setCartItems((currentItems) => {
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
        updatedCart = [...currentItems];
        updatedCart[existingCartItemIndex] = updatedItem;
        return updatedCart;
      } else {
        return [...currentItems, product];
      }
    });
  };

  return (
    <View style={{ paddingTop: 50 }}>
      <Header openCart={setShowCart} />
      <ScrollView>
        <Searchbar search={setSearch} />
        <Categories change={setCategory} category={category} />
        <Hero />
        <Products category={category} search={search} add={addCartItem} />
      </ScrollView>
      <Cart closeCart={setShowCart} show={showCart} cartItems={cartItems} />
    </View>
  );
}
