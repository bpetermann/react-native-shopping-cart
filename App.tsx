import { Home, ProductDetail, Authentication } from '@/components/Templates';
import { FavoritesContextProvider } from '@/context/favorites-context';
import { TranslationContextProvider } from '@/context/i18n-context';
import { Cart, Favorites } from '@/components/Organisms/App';
import { CartContextProvider } from '@/context/cart-context';
import { AuthContextProvider } from '@/context/auth-context';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { View, StyleSheet, Text } from 'react-native';
import { useBreakpoints } from '@/hooks';
import { Product } from './util/types';

export type RootStackParamList = {
  Home: { success: string };
  ProductDetail: { item: Product };
  Authentication: undefined;
};

export default function App() {
  const { isS } = useBreakpoints();

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <TranslationContextProvider>
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
    </TranslationContextProvider>
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
