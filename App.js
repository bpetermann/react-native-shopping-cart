import {
  Searchbar,
  Categories,
  Hero,
  Products,
  Cart,
  Header,
} from './components';
import { ScrollView, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { CartContextProvider } from './store/context/cart-context';
import useBreakpoints from './hooks/useBreakpoints';

export default function Template() {
  const [category, setCategory] = useState('Shoes');
  const [search, setSearch] = useState('');
  const { isS } = useBreakpoints();

  return (
    <View style={isS ? styles.app : styles.web}>
      <CartContextProvider>
        <Header />
        <ScrollView>
          <Searchbar search={setSearch} />
          <Categories change={setCategory} category={category} />
          <Hero />
          <Products category={category} search={search} />
        </ScrollView>
        <Cart />
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
