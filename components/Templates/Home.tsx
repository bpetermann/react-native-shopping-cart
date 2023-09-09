import {
  Categories,
  Hero,
  Products,
  Searchbar,
} from '@/components/Organisms/Home';
import { NavigationProp } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native';
import { useInitialData, useSuccess } from '@/hooks';
import { Header } from '@/components/Organisms/App';
import { useState, createRef } from 'react';
import { Product } from '@/util/types';

type Props = {
  navigation: NavigationProp<any, any>;
  route: {
    params: {
      success: string;
    };
  };
};

const Home = ({ navigation, route }: Props) => {
  const success = route?.params?.success;
  const [category, setCategory] = useState('Shoes');
  const [search, setSearch] = useState('');

  useSuccess(success);
  useInitialData();

  const ref = createRef<TextInput>();

  const focusSearch = () => {
    ref?.current?.focus();
  };

  const showDetail = (item: Product) => {
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
};

export default Home;
