import { Home, ProductDetail, Authentication } from '@/components/Templates';
import { TranslationContextProvider } from '@/context/i18n-context';
import { ToastProvider } from 'react-native-toast-notifications';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Cart, Favorites } from '@/components/Organisms/App';
import { View, StyleSheet } from 'react-native';
import { useBreakpoints } from '@/hooks';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { Product } from '@/globals';

export type RootStackParamList = {
  Home: { success: string };
  ProductDetail: { item: Product };
  Authentication: undefined;
};

export default function App() {
  const { isS } = useBreakpoints();

  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Provider store={store}>
      <TranslationContextProvider>
        <ToastProvider>
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
        </ToastProvider>
      </TranslationContextProvider>
    </Provider>
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
