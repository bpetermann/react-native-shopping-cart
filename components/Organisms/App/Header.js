import {
  Container,
  IconButton,
  NavigationButton,
  AmountButton,
} from '@/components/Atoms';
import { FavoritesContext } from '@/context/favorites-context';
import { CartContext } from '@/context/cart-context';
import { useRoute } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { useContext } from 'react';

export default function Header({ navigation, focus }) {
  const { setShowFavorites, favoriteItems } = useContext(FavoritesContext);
  const { amount, setShowCart: openCart } = useContext(CartContext);
  const route = useRoute();

  return (
    <Container bgColor={'#efeff0'} border shadow>
      <View style={styles.header}>
        <View style={styles.nav}>
          <NavigationButton
            onClick={() => navigation.navigate('Home')}
            img={require('@/assets/app/logo.png')}
            isActive={route.name === 'Home'}
          />
          <IconButton
            onClick={() => focus && focus()}
            img={require('@/assets/app/search.png')}
          />
          <AmountButton
            onClick={() => setShowFavorites(true)}
            img={require('@/assets/app/heart.png')}
            amount={favoriteItems.length}
          />
          <AmountButton
            onClick={() => openCart(true)}
            img={require('@/assets/app/cart.png')}
            amount={amount}
          />
        </View>
        <NavigationButton
          onClick={() => navigation.navigate('Authentication')}
          img={require('@/assets/app/account.png')}
          isActive={route.name === 'Authentication'}
        />
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 12,
    paddingHorizontal: 16,
    maxWidth: 1216,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
    maxWidth: 320,
  },
});
