import {
  Categories,
  Hero,
  Products,
  Searchbar,
  Cart,
  Favorites,
} from '@/components/Organisms/Home';
import { ScrollView } from 'react-native';
import { useState } from 'react';

export default function Home({ navigation }) {
  const [category, setCategory] = useState('Shoes');
  const [search, setSearch] = useState('');

  const showDetail = () => {
    navigation.navigate('ProductDetail');
  };

  return (
    <>
      <ScrollView>
        <Searchbar search={setSearch} />
        <Categories change={setCategory} category={category} />
        <Hero />
        <Products category={category} search={search} navigate={showDetail} />
      </ScrollView>
      <Cart />
      <Favorites />
    </>
  );
}
