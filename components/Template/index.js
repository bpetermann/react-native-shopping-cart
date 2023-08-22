import Favorites from '@/components/Favorites';
import { ScrollView } from 'react-native';
import Categories from './Categories';
import Cart from '@/components/Cart';
import Searchbar from './Searchbar';
import Products from './Products';
import { useState } from 'react';
import Hero from './Hero';

export default function Template() {
  const [category, setCategory] = useState('Shoes');
  const [search, setSearch] = useState('');

  return (
    <>
      <ScrollView>
        <Searchbar search={setSearch} />
        <Categories change={setCategory} category={category} />
        <Hero />
        <Products category={category} search={search} />
      </ScrollView>
      <Cart />
      <Favorites />
    </>
  );
}
