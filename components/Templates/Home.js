import {
  Categories,
  Hero,
  Products,
  Searchbar,
} from '@/components/Organisms/Home';
import { Header } from '@/components/Organisms/App';
import { ScrollView } from 'react-native';
import { useState, createRef } from 'react';

export default function Home({ navigation }) {
  const [category, setCategory] = useState('Shoes');
  const [search, setSearch] = useState('');
  const ref = createRef();

  const focusSearch = () => {
    ref.current.focus();
  };

  const showDetail = (item) => {
    navigation.navigate('ProductDetail', {
      item,
    });
  };

  return (
    <>
      <Header focus={focusSearch} navigation={navigation} />
      <ScrollView>
        <Searchbar ref={ref} focus={focusSearch} search={setSearch} />
        <Categories change={setCategory} category={category} />
        <Hero />
        <Products category={category} search={search} navigate={showDetail} />
      </ScrollView>
    </>
  );
}
