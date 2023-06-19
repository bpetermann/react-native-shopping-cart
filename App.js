import {
  Searchbar,
  Categories,
  Hero,
  Products,
  Cart,
  Header,
} from './components';
import {
  ScrollView,
  View,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import { useState } from 'react';

export default function Template() {
  const { width } = useWindowDimensions();
  const [category, setCategory] = useState('Shoes');
  const [search, setSearch] = useState('');
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const cartAmount = cartItems.reduce(function (acc, item) {
    return acc + item.amount;
  }, 0);

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
    <View style={width < 480 ? styles.app : styles.web}>
      <Header openCart={setShowCart} amount={cartAmount} />
      <ScrollView>
        <Searchbar search={setSearch} />
        <Categories change={setCategory} category={category} />
        <Hero />
        <Products category={category} search={search} add={addCartItem} />
      </ScrollView>
      <Cart
        show={showCart}
        cartItems={cartItems}
        add={addCartItem}
        closeCart={setShowCart}
        remove={removeCartItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 50,
  },
  web: {
    flex: 1,
  },
});
