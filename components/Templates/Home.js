import {
  Categories,
  Hero,
  Products,
  Searchbar,
} from '@/components/Organisms/Home';
import { useState, createRef, useEffect } from 'react';
import { AuthContext } from '@/context/auth-context';
import { Header } from '@/components/Organisms/App';
import useSuccess from '@/hooks/useSuccess';
import { ScrollView } from 'react-native';
import { useContext } from 'react';

export default function Home({ navigation, route }) {
  const { getUser } = useContext(AuthContext);
  const [category, setCategory] = useState('Shoes');
  const [search, setSearch] = useState('');
  const success = route?.params?.success;
  useSuccess(success);
  const ref = createRef();

  useEffect(() => {
    getUser();
  }, []);

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
