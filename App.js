import { Header, Searchbar, Categories, Hero, Products } from './components';
import { View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={{ paddingTop: 50 }}>
      <Header />
      <ScrollView>
        <Searchbar />
        <Categories />
        <Hero />
        <Products />
      </ScrollView>
    </View>
  );
}
