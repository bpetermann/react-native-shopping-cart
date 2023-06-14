import { Header, Searchbar, Categories, Hero, Products } from './components';
import { View, ScrollView } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [category, setCategory] = useState('Shoes');

  return (
    <View style={{ paddingTop: 50 }}>
      <Header />
      <ScrollView>
        <Searchbar />
        <Categories change={setCategory} category={category} />
        <Hero />
        <Products category={category}/>
      </ScrollView>
    </View>
  );
}
