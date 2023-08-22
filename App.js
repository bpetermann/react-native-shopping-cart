import { FavoritesContextProvider } from '@/store/context/favorites-context';
import { CartContextProvider } from '@/store/context/cart-context';
import useBreakpoints from '@/hooks/useBreakpoints';
import { View, StyleSheet } from 'react-native';
import Template from '@/components/Template';
import Header from '@/components/Header';

export default function App() {
  const { isS } = useBreakpoints();

  return (
    <CartContextProvider>
      <FavoritesContextProvider>
        <View style={isS ? styles.app : styles.web}>
          <Header />
          <Template />
        </View>
      </FavoritesContextProvider>
    </CartContextProvider>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    paddingTop: 50,
  },
  web: {
    flex: 1,
  },
});
