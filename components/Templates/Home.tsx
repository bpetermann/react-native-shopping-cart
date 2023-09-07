import {
  Categories,
  Hero,
  Products,
  Searchbar,
} from '@/components/Organisms/Home';
import { NavigationProp } from '@react-navigation/native';
import { useState, createRef, useEffect } from 'react';
import { AuthContext } from '@/context/auth-context';
import { ScrollView, TextInput } from 'react-native';
import { Header } from '@/components/Organisms/App';
import { Product } from '@/util/types';
import { useSuccess } from '@/hooks';
import { useContext } from 'react';

type Props = {
  navigation: NavigationProp<any, any>;
  route: {
    params: {
      success: string;
    };
  };
};

const Home = ({ navigation, route }: Props) => {
  const { getUser } = useContext(AuthContext);
  const success = route?.params?.success;
  const [category, setCategory] = useState('Shoes');
  const [search, setSearch] = useState('');

  useSuccess(success);

  const ref = createRef<TextInput>();

  useEffect(() => {
    getUser();
  }, []);

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
