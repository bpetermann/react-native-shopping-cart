import { FavoritesContext } from '../../store/context/favorites-context';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Container, IconButton } from '@/components/Shared';
import { CartContext } from '@/store/context/cart-context';
import { useContext } from 'react';

export default function Header() {
  const { amount, setShowCart: openCart } = useContext(CartContext);
  const { setShowFavorites, favoriteItems } = useContext(FavoritesContext);

  return (
    <Container bgColor={'#efeff0'} border>
      <View style={styles.header}>
        <View style={styles.nav}>
          <Image style={styles.img} source={require('@/assets/app/logo.png')} />
          <Image
            style={styles.img}
            source={require('@/assets/app/search.png')}
          />
          <View style={styles.iconButton}>
            <IconButton
              onClick={() => setShowFavorites(true)}
              img={require('@/assets/app/heart.png')}
            />
            {!!favoriteItems.length && (
              <View style={styles.favAmount}>
                <Text style={styles.count}>{favoriteItems.length}</Text>
              </View>
            )}
          </View>
          <View style={styles.iconButton}>
            <IconButton
              onClick={() => openCart(true)}
              img={require('@/assets/app/cart.png')}
            />
            {!!amount && (
              <View style={styles.amount}>
                <Text style={styles.count}>{amount}</Text>
              </View>
            )}
          </View>
        </View>
        <Image
          style={styles.img}
          source={require('@/assets/app/account.png')}
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
  iconButton: {
    position: 'relative',
  },
  amount: {
    backgroundColor: '#ff6900',
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 15 / 2,
    right: -6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 12,
  },
  favAmount: {
    backgroundColor: '#ff6900',
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 15 / 2,
    right: -6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 28,
    height: 28,
  },
});
