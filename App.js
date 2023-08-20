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
import { CartContextProvider } from './store/context/cart-context';

export default function Template() {
  const { width } = useWindowDimensions();
  const [category, setCategory] = useState('Shoes');
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState('');

  return (
    <View style={width < 480 ? styles.app : styles.web}>
      <CartContextProvider>
        <Header openCart={setShowCart} />
        <ScrollView>
          <Searchbar search={setSearch} />
          <Categories change={setCategory} category={category} />
          <Hero />
          <Products category={category} search={search} />
        </ScrollView>
        <Cart show={showCart} closeCart={setShowCart} />
      </CartContextProvider>
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
