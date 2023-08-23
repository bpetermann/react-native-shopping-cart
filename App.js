import { FavoritesContextProvider } from '@/store/context/favorites-context';
import { createStackNavigator } from '@react-navigation/stack';
import { CartContextProvider } from '@/store/context/cart-context';
import { NavigationContainer } from '@react-navigation/native';
import { Home, ProductDetail } from '@/components/Templates';
import useBreakpoints from '@/hooks/useBreakpoints';
import Header from '@/components/Molecules/Header';
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
              <Stack.Screen name='ProductDetail' component={ProductDetail} />
            </Stack.Navigator>
          </NavigationContainer>
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
