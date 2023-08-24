import { FavoritesContextProvider } from '@/context/favorites-context';
import { Cart, Favorites, Header } from '@/components/Organisms/App';
import { CartContextProvider } from '@/context/cart-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, ProductDetail } from '@/components/Templates';
import useBreakpoints from '@/hooks/useBreakpoints';
import { View, StyleSheet } from 'react-native';

export default function App() {
  const { isS } = useBreakpoints();

  const Stack = createStackNavigator();

  return (
    <CartContextProvider>
      <FavoritesContextProvider>
        <View style={isS ? styles.app : styles.web}>
          <Header />
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='ProductDetail'
                component={ProductDetail}
              />
            </Stack.Navigator>
          </NavigationContainer>
          <Cart />
          <Favorites />
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
