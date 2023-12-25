import {
  Categories,
  Hero,
  Products,
  Searchbar,
} from '@/components/Organisms/Home';
import { NavigationProp } from '@react-navigation/native';
import { Product as ProductType } from '@/util/types';
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
  const [products, setProducts] = useState<ProductType[]>([]);

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
        <Searchbar
          suggestions={products.map((item) => item.name)}
          setSearch={setSearch}
          focus={focusSearch}
          search={search}
          ref={ref}
        />
        <Categories change={setCategory} category={category} />
        <Hero />
        <Products
          setProducts={setProducts}
          navigate={showDetail}
          category={category}
          search={search}
          data={[]}
        />
      </ScrollView>
    </>
  );
};

export default Home;
