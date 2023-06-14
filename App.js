import { Header, Searchbar, Categories, Hero, Products } from './components';
import { View, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [category, setCategory] = useState('Shoes');
  const [search, setSearch] = useState('');

  return (
    <View style={{ paddingTop: 50 }}>
      <Header />
      <ScrollView>
        <Searchbar search={setSearch}/>
        <Categories change={setCategory} category={category} />
        <Hero />
        <Products category={category} search={search}/>
      </ScrollView>
    </View>
  );
}
