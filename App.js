import { Home, ProductDetail, Authentication } from '@/components/Templates';
import { FavoritesContextProvider } from '@/context/favorites-context';
import { Cart, Favorites } from '@/components/Organisms/App';
import { CartContextProvider } from '@/context/cart-context';
import { AuthContextProvider } from '@/context/auth-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import useBreakpoints from '@/hooks/useBreakpoints';
import { View, StyleSheet } from 'react-native';

export default function App() {
  const { isS } = useBreakpoints();

  const Stack = createStackNavigator();

  return (
    <CartContextProvider>
      <FavoritesContextProvider>
        <AuthContextProvider>
          <View style={isS ? styles.app : styles.web}>
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
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name='Authentication'
                  component={Authentication}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            </NavigationContainer>
            <Cart />
            <Favorites />
          </View>
        </AuthContextProvider>
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
